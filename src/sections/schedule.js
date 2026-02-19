const SCHEDULE_SCROLL_WIDTH = 300; // Width of the schedule scroll frame in vw
const EVENTS = [
  {
    name: "Event 1",
    location: "Room A",
    start: "9:00",
    end: "11:00",
    department: "Architecture",
  },
  {
    name: "Event 2",
    location: "Room B",
    start: "10:40",
    end: "12:00",
    department: "Art + Design",
  },
  {
    name: "Event 3",
    location: "Room C",
    start: "13:00",
    end: "15:15",
    department: "Journalism",
  },
  {
    name: "Event 4",
    location: "Room D",
    start: "14:00",
    end: "16:00",
    department: "Theatre",
  },
  {
    name: "Event 5",
    location: "Room E",
    start: "15:20",
    end: "17:45",
    department: "Music",
  },
  {
    name: "Event 6",
    location: "Room F",
    start: "16:00",
    end: "18:00",
    department: "Comm Studies",
  },
  {
    name: "Event 7",
    location: "Room G",
    start: "8:30",
    end: "9:30",
    department: "Architecture",
  },
  {
    name: "Event 8",
    location: "Room H",
    start: "12:30",
    end: "13:30",
    department: "Art + Design",
  },
  {
    name: "Event 9",
    location: "Room I",
    start: "17:00",
    end: "19:00",
    department: "Journalism",
  },
  {
    name: "Event 10",
    location: "Room J",
    start: "9:15",
    end: "10:45",
    department: "Theatre",
  },
  {
    name: "Event 11",
    location: "Room K",
    start: "11:30",
    end: "12:30",
    department: "Music",
  },
  {
    name: "Event 12",
    location: "Room L",
    start: "14:30",
    end: "16:30",
    department: "Comm Studies",
  },
];
const DEPARTMENT_COLORS = {
  Architecture: "#DB5322",
  "Art + Design": "#0097C2",
  Journalism: "#992EFC",
  Theatre: "#548C2F",
  Music: "#CC0068",
  "Comm Studies": "#F9CB40",
};

export function render() {
  return `
    <section class="p-8 pb-2 section-full flex flex-col font-akshar" id="schedule">
      <h2 
        class="font-medium text-black mb-10"
        style="font-size: clamp(3rem, 6vw, 80px); line-height: 1.09;"
      >
        SCHEDULE
      </h2>

      <!-- Schedule Filter -->
      <button class="w-full flex flex-row justify-end underline mb-4">
        Filter by Department
      </button>

      <!-- Main Schedule -->
      <div class="w-full h-6 bg-[#67192F]"></div> 

      <div class="relative flex-1 max-w-full overflow-scroll no-scrollbar" id="schedule-frame">
        <div id="schedule-times" style="width: ${SCHEDULE_SCROLL_WIDTH}vw;" class="sticky top-0 h-16 outline-1 grid grid-cols-12 grid-rows-none"></div>
        <div id="schedule-events" style="width: ${SCHEDULE_SCROLL_WIDTH}vw;" class="absolute mt-16 flex flex-col gap-8 overscroll-none"></div>
        <div id="event-modal-container" class="absolute inset-0 flex justify-center items-center z-999 hidden"></div>
      </div>

      <div class="w-full h-6 bg-[#67192F]"></div> 
    </section>
  `;
}

export function init() {
  renderSchedule();
  // TODO: add filter interactivity
}

const renderSchedule = () => {
  const timeSlots = [
    { label: "8:00 AM", value: 8 },
    { label: "9:00 AM", value: 9 },
    { label: "10:00 AM", value: 10 },
    { label: "11:00 AM", value: 11 },
    { label: "12:00 PM", value: 12 },
    { label: "1:00 PM", value: 13 },
    { label: "2:00 PM", value: 14 },
    { label: "3:00 PM", value: 15 },
    { label: "4:00 PM", value: 16 },
    { label: "5:00 PM", value: 17 },
    { label: "6:00 PM", value: 18 },
    { label: "7:00 PM", value: 19 },
  ];

  const scheduleTimes = document.getElementById("schedule-times");
  const scheduleEvents = document.getElementById("schedule-events");

  // Creating time labels and grid lines
  timeSlots.forEach((slot, index) => {
    const label = document.createElement("div");
    label.textContent = slot.label;
    label.className =
      "text-left text-xl text-gray-dk whitespace-nowrap py-2 pl-2";
    label.style.gridColumnStart = index + 1;
    scheduleTimes.appendChild(label);

    const line = document.createElement("div");
    line.className =
      "absolute h-[150%] -translate-y-1/4 w-[1px] bg-gray-300 z-1"; // Extend line beyond schedule height to account for padding
    line.style.left = `${(index / timeSlots.length) * 100}%`;
    scheduleEvents.appendChild(line);
  });

  // Populating events
  EVENTS.sort((a, b) => {
    return militaryTimeToNumber(a.start) - militaryTimeToNumber(b.start);
  }).forEach((eventItem) => {
    const event = document.createElement("button");
    event.className =
      "p-2 text-start text-lg font-light overflow-ellipsis whitespace-nowrap z-2";
    event.textContent = `${eventItem.name} | ${eventItem.location}`;
    event.style.backgroundColor = DEPARTMENT_COLORS[eventItem.department];
    event.onclick = () => showModal(eventItem);

    const eventDuration =
      militaryTimeToNumber(eventItem.end) -
      militaryTimeToNumber(eventItem.start);
    const eventDayDuration =
      timeSlots[timeSlots.length - 1].value - timeSlots[0].value + 1;
    const eventStartOffset =
      militaryTimeToNumber(eventItem.start) - timeSlots[0].value;

    event.style.width = `${(eventDuration / eventDayDuration) * 100}%`;
    event.style.marginLeft = `${(eventStartOffset / eventDayDuration) * 100}%`;

    scheduleEvents.appendChild(event);
  });
};

// Shows the event modal for some item. Clicking anywhere on the blackened area outside the modal will close it.
const showModal = (eventItem) => {
  const modalContainer = document.getElementById("event-modal-container");
  modalContainer.style.display = "flex";
  modalContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Semi-transparent black background
  modalContainer.innerHTML = `
    <div class="flex flex-col items-center justify-between gap-2 rounded-md p-4 text-white" style="background-color:${DEPARTMENT_COLORS[eventItem.department]};">
      <h3 class="text-4xl font-medium">${eventItem.name}</h3>
      <div class="flex flex-row gap-8 text-xl font-medium">
        <div class="flex flex-row gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
            <path d="M11.2387 0C5.02875 0 0 5.04 0 11.25C0 17.46 5.02875 22.5 11.2387 22.5C17.46 22.5 22.5 17.46 22.5 11.25C22.5 5.04 17.46 0 11.2387 0ZM14.9513 16.5487L10.125 11.7113V5.625H12.375V10.7887L16.5487 14.9625L14.9513 16.5487Z" fill="white"/>
          </svg>
          <h4>${eventItem.start} - ${eventItem.end}</h4>
        </div>
        <div class="flex flex-row gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="23" viewBox="0 0 16 23" fill="none">
            <path d="M7.875 0C3.52125 0 0 3.52125 0 7.875C0 13.7812 7.875 22.5 7.875 22.5C7.875 22.5 15.75 13.7812 15.75 7.875C15.75 3.52125 12.2288 0 7.875 0ZM7.875 10.6875C6.3225 10.6875 5.0625 9.4275 5.0625 7.875C5.0625 6.3225 6.3225 5.0625 7.875 5.0625C9.4275 5.0625 10.6875 6.3225 10.6875 7.875C10.6875 9.4275 9.4275 10.6875 7.875 10.6875Z" fill="white"/>
          </svg>
          <h4>${eventItem.location}</h4>
        </div>
      </div>
      <p class="mt-4 font-light">A short description on what the event is about.</p>
    </div>
  `;

  // Close modal on click outside
  modalContainer.onclick = (e) => {
    if (e.target === modalContainer) {
      modalContainer.innerHTML = "";
      modalContainer.style.display = "none";
    }
  };
};

// Utility function to convert military time string to numeric value
// Example: "8:00" -> 8.0, "9:30" -> 9.5, "13:45" -> 13.75
const militaryTimeToNumber = (timeString) => {
  const [hours, minutes] = timeString.split(":").map(Number);
  return hours + minutes / 60;
};
