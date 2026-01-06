import { Formik, Form, Field } from 'formik';
import { Calendar, Clock, Users, Coffee, CircleCheck } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BookingCalendar() {
    const navigate = useNavigate();

  useEffect(() => {
    let token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="min-h-screen bg-[#FFF8DC] pt-24 pb-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center bg-[#6F4E37] p-4 rounded-full mb-4">
            <Calendar className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#6F4E37] mb-2">
            Book Your Table
          </h1>
          <p className="text-[#4B382A] text-lg">Reserve your perfect spot</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
          <Formik
            initialValues={{
              date: '',
              time: '',
              persons: 2,
              tableType: 'normal',
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values, setFieldValue }) => (
              <Form className="space-y-8">

                <div>
                  <label className="flex items-center gap-3 mb-2 text-lg font-medium text-black">
                    <Calendar className="w-6 h-6 text-[#6F4E37]" />
                    Select Date
                  </label>
                  <Field
                    type="date"
                    name="date"
                    className="w-full  border border-[#969493] rounded-xl px-4 py-3 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#6F4E37]"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-3 mb-3 text-lg font-medium text-black">
                    <Clock className="w-6 h-6 text-[#6F4E37]" />
                    Select Time
                  </label>
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                    {['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00' ].map(
                      (time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFieldValue('time', time)}
                          className={`px-4 py-2 rounded-xl border text-lg font-medium transition-all ${
                            values.time === time
                              ? 'bg-[#6F4E37] text-white border-[#4B382A]'
                              : 'bg-white text-black border-[#969493] hover:bg-[#D1BFA7]'
                          }`}
                        >
                          {time}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-3 mb-2 text-lg font-medium text-black">
                    <Users className="w-6 h-6 text-[#6F4E37]" />
                    Number of Persons
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() =>
                        setFieldValue('persons', Math.max(1, values.persons - 1))
                      }
                      className="px-5 py-2 border rounded-lg text-lg text-[#6F4E37] font-medium bg-white border-[#6F4E37] hover:bg-[#D1BFA7]"
                    >
                      -
                    </button>

                    <span className="text-2xl font-semibold w-12 text-center text-black">
                      {values.persons}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setFieldValue('persons', Math.min(10, values.persons + 1))
                      }
                      className="px-5 py-2 border text-[#6F4E37] rounded-lg text-lg font-medium bg-white border-[#6F4E37] hover:bg-[#D1BFA7]"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-3 mb-3 text-lg font-medium text-black">
                    <Coffee className="w-6 h-6 text-[#6F4E37]" />
                    Table Type
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['normal', 'vip'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFieldValue('tableType', type)}
                        className={`p-5 rounded-xl border text-left text-lg font-medium transition-all ${
                          values.tableType === type
                            ? 'bg-[#6F4E37] text-white border-[#6F4E37]'
                            : 'bg-white text-[#4B382A] border-[#6F4E37] hover:bg-[#D1BFA7]'
                        }`}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold">
                            {type === 'normal' ? 'Normal Table' : 'VIP Table'}
                          </span>
                          {values.tableType === type && (
                            <CircleCheck className="w-6 h-6 text-white" />
                          )}
                        </div>
                        <p className="text-base opacity-90">
                          {type === 'normal'
                            ? 'Casual dining'
                            : 'Premium experience'}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#6F4E37] text-white text-lg font-semibold hover:opacity-90 transition"
                >
                  Confirm Booking
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
