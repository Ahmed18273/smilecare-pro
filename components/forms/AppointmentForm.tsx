"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { serviceNames } from "@/data/services";
import { useState } from "react";
import { Loader2 } from "lucide-react";
const appointmentTimes = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
];
const appointmentSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),

  email: z.string().email("Enter a valid email address"),

  phone: z.string().min(7, "Enter a valid phone number"),

  service: z.string().min(1, "Select a service"),

  date: z.string().min(1, "Select a date"),

  time: z.string().min(1, "Select a time"),

  message: z.string().optional(),
});
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
type AppointmentFormData = z.infer<typeof appointmentSchema>; 
export default function AppointmentForm() {
const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm<AppointmentFormData>({
  resolver: zodResolver(appointmentSchema),
});
const [isSubmitting, setIsSubmitting] = useState(false);
console.log(errors);

const onSubmit = async (data: AppointmentFormData) => {
  setIsSubmitting(true);
const selectedDate = new Date(data.date);

if (selectedDate.getDay() === 0) {
  toast.error("Appointments are not available on Sundays.");
  setIsSubmitting(false);
  return;
}
const today = new Date();
const selected = new Date(data.date);

if (selected.toDateString() === today.toDateString()) {
  const currentTime = today.toTimeString().slice(0, 5);

  if (data.time < currentTime) {
    toast.error("Please select a future time.");
    setIsSubmitting(false);
    return;
  }
}
  try {
    const response = await fetch("/api/appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
  toast.success(
  "Thank you! Your appointment request has been received. We'll contact you shortly to confirm it."
);
  reset();
} else {
  toast.error(result.error || "Something went wrong.");
}
  } catch (error) {
  console.error(error);
  toast.error(
  "We couldn't send your appointment request. Please try again or contact us by phone or WhatsApp."
);
}
   finally {
    setIsSubmitting(false);
  }
};   
return (
    <section id="appointment" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-blue-600">
            Book Appointment
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Schedule Your Visit
          </h2>

          <p className="mt-4 text-slate-600">
            Fill out the form below and our team will contact you to confirm your appointment.
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl">

          <form
  onSubmit={handleSubmit(onSubmit)}
  className="grid gap-6 md:grid-cols-2"
  
>



                <input 
                {...register("name")}
                    type="text"
                    placeholder="Full Name"
                    className="rounded-xl border p-4"
                    disabled={isSubmitting}
                />
                {errors.name && (
                    <p className="text-sm text-red-500">
                        {errors.name.message}
                    </p>
                )}

                <input
                {...register("email")}
                    type="email"
                    placeholder="Email Address"
                    className="rounded-xl border p-4"
                    disabled={isSubmitting}
                />
                {errors.email && (
  <p className="text-sm text-red-500">
    {errors.email.message}
  </p>
)}

                <input
                  {...register("phone")}
                  type="tel"
                    placeholder="Phone Number"
                    className="rounded-xl border p-4"
                    disabled={isSubmitting}
                />
                {errors.phone && (
  <p className="text-sm text-red-500">
    {errors.phone.message}
  </p>
)}

                <input
  {...register("date")}
  type="date"
  min={new Date().toISOString().split("T")[0]}
  className="h-14 w-full rounded-xl border border-slate-300 bg-white px-4"
  disabled={isSubmitting}
/>

{errors.date && (
  <p className="text-sm text-red-500">
    {errors.date.message}
  </p>
  
)}

                <select
  {...register("service")}
  className="rounded-xl border p-4"
  disabled={isSubmitting}>
                    <option value="">Select Service</option>
                    {serviceNames.map((service) => (
  <option key={service} value={service}>
    {service}
  </option>
  
))}
{errors.service && (
  <p className="text-sm text-red-500">
    {errors.service.message}
  </p>
)}

                
                </select>
                <div className="space-y-2">
  <label className="text-sm font-medium text-slate-700">
    Preferred Time
  </label>

  <select
    {...register("time")}
    defaultValue=""
    className="h-14 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-700 shadow-sm transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
  >
    <option value="" disabled>
      Select Appointment Time
    </option>

    {appointmentTimes.map((time) => (
      <option key={time} value={time}>
        {time}
      </option>
    ))}
  </select>

  {errors.time && (
    <p className="text-sm text-red-500">
      {errors.time.message}
    </p>
  )}
</div>

                


                <textarea
  {...register("message")}
  placeholder="Tell us how we can help..."
  className="rounded-xl border p-4 md:col-span-2"
  disabled={isSubmitting}
  rows={5}
/>

                <button
  type="submit"
  disabled={isSubmitting}
  className="rounded-xl bg-blue-600 p-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2"
>
  {isSubmitting ? (
  <span className="flex items-center justify-center gap-2">
    <Loader2 className="h-5 w-5 animate-spin" />
    Booking...
  </span>
) : (
  "Book Appointment"
)}
</button>

</form>

        </div>
      </div>
    </section>
  );
}