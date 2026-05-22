"use client";

import React, { useState, useEffect } from 'react';

export default function BookingPage() {
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState('');
  const [loading, setLoading] = useState(true);
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [calendarMonth, setCalendarMonth] = useState(today.getMonth());
  const [calendarYear, setCalendarYear] = useState(today.getFullYear());
  const [fromTime, setFromTime] = useState('09:00 AM');
  const [toTime, setToTime] = useState('11:00 AM');

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const res = await fetch('http://localhost:3000/stores');
        if (res.ok) {
          const data = await res.json();
          setBranches(data);
          if (data.length > 0) {
            setSelectedBranch(data[0]._id);
          }
        }
      } catch (err) {
        console.error('Error fetching branches:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBranches();
  }, []);

  const monthNames = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ];

  const fromTimeOptions = [
    '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
    '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM'
  ];

  const toTimeOptions = [
    '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM',
    '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM', '12:00 AM'
  ];

  const parseTimeToMinutes = (timeStr) => {
    if (!timeStr) return 0;
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    if (modifier === 'PM' && hours !== 12) {
      hours += 12;
    }
    if (modifier === 'AM' && hours === 12) {
      hours = 24; // End of day midnight
    }
    return hours * 60 + minutes;
  };

  const handleFromTimeChange = (newFromTime) => {
    setFromTime(newFromTime);
    const newFromMin = parseTimeToMinutes(newFromTime);
    const toMin = parseTimeToMinutes(toTime);
    if (toMin <= newFromMin) {
      const nextOption = toTimeOptions.find(opt => parseTimeToMinutes(opt) > newFromMin);
      if (nextOption) {
        setToTime(nextOption);
      }
    }
  };

  const getFilteredToTimeOptions = () => {
    const fromMin = parseTimeToMinutes(fromTime);
    return toTimeOptions.filter(opt => parseTimeToMinutes(opt) > fromMin);
  };

  const durationHours = (() => {
    const startMin = parseTimeToMinutes(fromTime);
    const endMin = parseTimeToMinutes(toTime);
    if (endMin <= startMin) return 0;
    return (endMin - startMin) / 60;
  })();

  const totalPrice = durationHours * 850;

  const getCalendarDays = () => {
    const firstDay = new Date(calendarYear, calendarMonth, 1).getDay();
    const totalDays = new Date(calendarYear, calendarMonth + 1, 0).getDate();
    const prevMonthTotalDays = new Date(calendarYear, calendarMonth, 0).getDate();

    const days = [];

    // Prev month padding days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonthTotalDays - i,
        month: calendarMonth === 0 ? 11 : calendarMonth - 1,
        year: calendarMonth === 0 ? calendarYear - 1 : calendarYear,
        isPadding: true,
      });
    }

    // Current month days
    for (let i = 1; i <= totalDays; i++) {
      days.push({
        day: i,
        month: calendarMonth,
        year: calendarYear,
        isPadding: false,
      });
    }

    // Next month padding days
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push({
        day: i,
        month: calendarMonth === 11 ? 0 : calendarMonth + 1,
        year: calendarMonth === 11 ? calendarYear + 1 : calendarYear,
        isPadding: true,
      });
    }

    return days;
  };

  const isPastDate = (year, month, day) => {
    const compareDate = new Date(year, month, day);
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return compareDate < todayMidnight;
  };

  const isDateSelected = (year, month, day) => {
    return selectedDate &&
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year;
  };

  const handlePrevMonth = () => {
    if (calendarYear === today.getFullYear() && calendarMonth === today.getMonth()) {
      return; // Prevent going to past months
    }
    if (calendarMonth === 0) {
      setCalendarMonth(11);
      setCalendarYear(calendarYear - 1);
    } else {
      setCalendarMonth(calendarMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (calendarMonth === 11) {
      setCalendarMonth(0);
      setCalendarYear(calendarYear + 1);
    } else {
      setCalendarMonth(calendarMonth + 1);
    }
  };

  const getCleanPhoneNumber = (phone) => {
    if (!phone) return '';
    let cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
      cleaned = '91' + cleaned;
    }
    return cleaned;
  };

  const handleConfirmBooking = () => {
    const selectedBranchObj = branches.find(b => b._id === selectedBranch);
    if (!selectedBranchObj) {
      alert("Please select a branch first.");
      return;
    }

    const phone = selectedBranchObj.phone;
    if (!phone) {
      alert(`The selected branch (${selectedBranchObj.name}) does not have a registered phone number.`);
      return;
    }

    const cleanedPhone = getCleanPhoneNumber(phone);
    if (!cleanedPhone) {
      alert("Invalid phone number format for the selected branch.");
      return;
    }

    const formattedDate = selectedDate
      ? selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      : 'Not Selected';

    const message = `*NEW BOOKING REQUEST*

*Branch/Arena:* ${selectedBranchObj.name}
*Date:* ${formattedDate}
*Time:* ${fromTime} to ${toTime} (${durationHours} hr${durationHours > 1 ? 's' : ''})
*Total Price:* Rs. ${totalPrice}

Please confirm my slot. Thank you!`;

    const urlEncodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanedPhone}?text=${urlEncodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-[#0b0f15] min-h-screen text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Reserve Your Arena
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl">
              Elevate your performance with state-of-the-art facilities and precision analytics.<br className="hidden md:block" /> Select your discipline to begin.
            </p>
          </div>
          <div className="mt-6 md:mt-0 bg-[#151b22] border border-white/10 rounded-sm px-4 py-2 flex items-center shadow-lg">
            <span className="w-2.5 h-2.5 bg-[#AED500] rounded-full animate-pulse mr-3"></span>
            <span className="text-gray-300 text-[10px] font-bold tracking-[0.2em] uppercase">84 Arenas Active Now</span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left Column: Sport & Time */}
          <div className="lg:col-span-8 space-y-12">

            {/* 01 SELECT BRANCH */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#AED500] text-[#020B1A] font-bold text-sm px-2 py-1 rounded-sm">01</div>
                  <h2 className="text-[#AED500] text-xs font-bold tracking-[0.2em] uppercase">Select Branch</h2>
                </div>
                <div className="bg-[#1f241a] text-[#8aa32a] text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-[#AED500]/20">
                  Required
                </div>
              </div>

              <div className="relative">
                {loading ? (
                  <div className="flex items-center space-x-3 text-gray-400 text-sm">
                    <svg className="animate-spin h-5 w-5 text-[#AED500]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Loading available branches...</span>
                  </div>
                ) : (
                  <div className="relative">
                    <select
                      id="branch-select"
                      value={selectedBranch}
                      onChange={(e) => setSelectedBranch(e.target.value)}
                      className="w-full bg-[#151b22] text-white border border-white/5 hover:border-white/20 px-4 py-4 rounded-md focus:outline-none focus:ring-1 focus:ring-[#AED500] transition-colors text-sm appearance-none cursor-pointer pr-10 font-medium tracking-wide"
                    >
                      {branches.map((branch) => (
                        <option key={branch._id} value={branch._id} className="bg-[#151b22] text-white">
                          {branch.name} — {branch.address} {branch.phone ? `(${branch.phone})` : ''}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* 03 SELECT TIME SLOT */}
            <section className="pt-6 border-t border-white/5">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-[#AED500] text-[#020B1A] font-bold text-sm px-2 py-1 rounded-sm">03</div>
                <h2 className="text-[#AED500] text-xs font-bold tracking-[0.2em] uppercase">Select Time Slot</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* From Time */}
                <div>
                  <label className="block text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-3">From Time</label>
                  <div className="relative">
                    <select
                      value={fromTime}
                      onChange={(e) => handleFromTimeChange(e.target.value)}
                      className="w-full bg-[#151b22] text-white border border-white/5 hover:border-white/20 px-4 py-4 rounded-md focus:outline-none focus:ring-1 focus:ring-[#AED500] transition-colors text-sm appearance-none cursor-pointer pr-10 font-medium tracking-wide"
                    >
                      {fromTimeOptions.map(time => (
                        <option key={time} value={time} className="bg-[#151b22] text-white">{time}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* To Time */}
                <div>
                  <label className="block text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-3">To Time</label>
                  <div className="relative">
                    <select
                      value={toTime}
                      onChange={(e) => setToTime(e.target.value)}
                      className="w-full bg-[#151b22] text-white border border-white/5 hover:border-white/20 px-4 py-4 rounded-md focus:outline-none focus:ring-1 focus:ring-[#AED500] transition-colors text-sm appearance-none cursor-pointer pr-10 font-medium tracking-wide"
                    >
                      {getFilteredToTimeOptions().map(time => (
                        <option key={time} value={time} className="bg-[#151b22] text-white">{time}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column: Date & Summary */}
          <div className="lg:col-span-4 space-y-8">

            {/* 02 SELECT DATE */}
            <section>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-[#AED500] text-[#020B1A] font-bold text-sm px-2 py-1 rounded-sm">02</div>
                <h2 className="text-[#AED500] text-xs font-bold tracking-[0.2em] uppercase">Select Date</h2>
              </div>

              <div className="bg-[#151b22] p-6 rounded-lg border border-white/5">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-white font-bold tracking-wider text-sm uppercase">
                    {monthNames[calendarMonth]} {calendarYear}
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={handlePrevMonth}
                      disabled={calendarYear === today.getFullYear() && calendarMonth === today.getMonth()}
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${calendarYear === today.getFullYear() && calendarMonth === today.getMonth()
                          ? 'bg-[#151b22] text-gray-600 cursor-not-allowed opacity-50'
                          : 'bg-[#1e252e] text-gray-400 hover:text-white'
                        }`}
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                      onClick={handleNextMonth}
                      className="w-6 h-6 rounded-full bg-[#1e252e] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center mb-4">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                    <div key={`${day}-${index}`} className="text-[10px] font-bold text-gray-500 mb-2">{day}</div>
                  ))}

                  {/* Calendar Days - Rendered Dynamically */}
                  {getCalendarDays().map((item, idx) => {
                    if (item.isPadding) {
                      return (
                        <div key={`padding-${idx}`} className="text-gray-700 text-xs py-2 w-full select-none cursor-default">
                          {item.day}
                        </div>
                      );
                    }

                    const isPast = isPastDate(item.year, item.month, item.day);
                    const isSel = isDateSelected(item.year, item.month, item.day);

                    return (
                      <button
                        key={`day-${item.day}`}
                        onClick={() => setSelectedDate(new Date(item.year, item.month, item.day))}
                        disabled={isPast}
                        className={`text-xs py-2 w-full rounded-sm transition-colors ${isPast
                            ? 'text-gray-600 cursor-not-allowed opacity-40'
                            : isSel
                              ? 'bg-[#AED500] text-[#020B1A] font-bold shadow-md shadow-[#AED500]/20'
                              : 'text-gray-300 hover:bg-[#1e252e]'
                          }`}
                      >
                        {item.day}
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* RESERVATION SUMMARY */}
            <section className="bg-[#151b22] rounded-lg border-y border-r border-white/5 border-l-4 border-l-[#AED500] p-6 shadow-xl relative overflow-hidden">
              {/* Background subtle decoration */}
              <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-1/4 translate-y-1/4 text-[#AED500]">
                <svg className="w-32 h-32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>

              <h3 className="text-[#AED500] text-[11px] font-bold tracking-[0.2em] uppercase mb-8">Reservation Summary</h3>

              <div className="space-y-5 mb-8">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-center text-gray-400 flex-shrink-0 pt-0.5">
                    <svg className="w-3.5 h-3.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-[10px] font-bold tracking-widest uppercase">Branch / Arena</span>
                  </div>
                  <span className="text-xs font-medium text-white text-right break-words max-w-[200px]">
                    {branches.find(b => b._id === selectedBranch)?.name || 'Select Branch'}
                  </span>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-center text-gray-400 flex-shrink-0 pt-0.5">
                    <svg className="w-3.5 h-3.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span className="text-[10px] font-bold tracking-widest uppercase">Schedule</span>
                  </div>
                  <span className="text-xs font-medium text-white text-right flex-shrink-0">
                    {selectedDate ? selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Select Date'}
                  </span>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-center text-gray-400 flex-shrink-0 pt-0.5">
                    <svg className="w-3.5 h-3.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-[10px] font-bold tracking-widest uppercase">Duration</span>
                  </div>
                  <span className="text-xs font-medium text-white text-right break-words max-w-[200px]">
                    {fromTime} to {toTime} ({durationHours} hr{durationHours > 1 ? 's' : ''})
                  </span>
                </div>
              </div>

              {/* <div className="border-t border-dashed border-white/10 pt-6 mb-8 flex justify-between items-end">
                 <span className="text-[#8aa32a] text-[10px] font-bold tracking-[0.2em] uppercase pb-1">Total Payable</span>
                 <span className="text-3xl font-normal text-white">₹{totalPrice}</span>
               </div> */}

              <button 
                onClick={handleConfirmBooking}
                className="w-full bg-[#AED500] hover:bg-[#c2eb0d] text-[#020B1A] font-bold tracking-widest uppercase py-4 rounded-sm flex items-center justify-center transition-colors shadow-lg shadow-[#AED500]/10 mb-4"
              >
                Confirm Booking
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>

              <p className="text-center text-gray-500 text-[9px] font-bold tracking-[0.2em] uppercase">
                Secure Encrypted Checkout
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}