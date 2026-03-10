const SCHEDULE_SCROLL_HEIGHT = 250; // Height of the schedule scroll frame in vw
const EVENTS = [
  {
    name: "The Mills Institute and Mills College Art Museum Collaborative Fellowship, Work-in-progress Talk: Shared Patterns: Form and Labor in Crafts and Generative AI",
    location: "Oakland Campus: Aron Art Center 183, Building C",
    start: "15:00",
    end: "16:00",
    department: "Mills Institute",
    eventType: "Book Talk",
    description:
      "PhD student Sei Jung talks about her museum collection-based research project for the Mills Institute and Mills College Art Museum Collaborative Fellowship, exploring shared patterns at the intersection of crafts and generative AI.",
  },
  {
    name: "Collective Living and the Architectural Imaginary: Book Talk with Anthony Averbeck",
    location: "CfD, Ryder Hall",
    start: "9:30",
    end: "10:30",
    department: "SoA",
    eventType: "Book Talk",
    description: "",
  },
  {
    name: "Forest First Timber Building: Book Talk with Kiel Moe",
    location: "CfD, Ryder Hall",
    start: "14:00",
    end: "15:00",
    department: "SoA",
    eventType: "Book Talk",
    description: "",
  },
  {
    name: "College of Arts, Media and Design Community Showcase",
    location: "Ryder Lobby",
    start: "11:00",
    end: "14:00",
    department: "CAMD",
    eventType: "Showcase",
    description: "",
  },
  {
    name: "City of Boston Participatory Budget Showcase",
    location: "CfD, Ryder Hall",
    start: "12:00",
    end: "13:00",
    department: "CfD",
    eventType: "Showcase",
    description: "",
  },
  {
    name: '"Our Energy Nexus" Exhibit Presentation',
    location: "CfD, Ryder Hall",
    start: "13:00",
    end: "14:00",
    department: "CfD",
    eventType: "Showcase",
    description: "",
  },
  {
    name: "Art + Design Open Department Hours",
    location: "Ryder 239",
    start: "10:00",
    end: "13:00",
    department: "A+D",
    eventType: "Open Classroom",
    description: "",
  },
  {
    name: "Experimental Video with Julia Hechtman",
    location: "Ryder 239",
    start: "13:30",
    end: "14:30",
    department: "A+D",
    eventType: "Showcase",
    description: "",
  },
  {
    name: "Paper and Graphic Demo",
    location: "Ryder 239",
    start: "10:30",
    end: "12:00",
    department: "A+D",
    eventType: "Showcase",
    description: "",
  },
  {
    name: "Open Classroom: ARTH3000: Topics in Graphic Medicine",
    location: "Ryder 236",
    start: "10:00",
    end: "11:00",
    department: "A+D",
    eventType: "Open Classroom",
    description: "",
  },
  {
    name: "Exhibition of Photography Student Work",
    location: "Ryder 2nd Floor Bulletin Boards",
    start: "9:00",
    end: "17:00",
    department: "A+D",
    eventType: "Showcase",
    description: "",
  },
  {
    name: "Exhibition of Faculty Graphic Design Work",
    location: "Ryder 3rd Floor White Shelves",
    start: "9:00",
    end: "17:00",
    department: "A+D",
    eventType: "Showcase",
    description: "",
  },
  {
    name: "Exhibition of Art + Design Fundamentals Student Work",
    location: "Ryder 4th Floor Hallway",
    start: "9:00",
    end: "17:00",
    department: "A+D",
    eventType: "Showcase",
    description: "",
  },
  {
    name: "Screening of Documentary Recording of Filial; scenes for puppets, vocalist and chamber ensemble with Hubert Ho",
    location: "Ryder 354",
    start: "10:00",
    end: "11:00",
    department: "Music",
    eventType: "Showcase",
    description: "",
  },
  {
    name: "Embedded AI for Audio and Music Applications with Victor Zappi",
    location: "Ryder 354",
    start: "11:00",
    end: "12:00",
    department: "Music/Research",
    eventType: "Showcase",
    description: "",
  },
  {
    name: "Student Presentation on Data Sonification",
    location: "Ryder 354",
    start: "12:00",
    end: "13:00",
    department: "Music/Research",
    eventType: "Showcase",
    description: "",
  },
  {
    name: "Open Guitar Workshop with Bob Ward",
    location: "Ryder 354",
    start: "13:30",
    end: "15:00",
    department: "Music",
    eventType: "Open Classroom",
    description: "",
  },
  {
    name: "Open Classroom: Improvisation with Sylke Meyer",
    location: "Ryder 372",
    start: "11:45",
    end: "13:25",
    department: "Theatre",
    eventType: "Open Classroom",
    description: "",
  },
  {
    name: "Open Classroom: Representational Drawing",
    location: "Ryder 405",
    start: "11:00",
    end: "12:30",
    department: "A+D",
    eventType: "Open Classroom",
    description: "",
  },
  {
    name: "Open Classroom: Lighting Design with Caitlin Smith Rappoport",
    location: "Ryder 334",
    start: "15:25",
    end: "17:05",
    department: "Theatre",
    eventType: "Open Classroom",
    description: "",
  },
  {
    name: "Open Classroom: ARCH 5230: Long-span structures",
    location: "Churchill 101",
    start: "9:50",
    end: "11:30",
    department: "SoA",
    eventType: "Open Classroom",
    description: "Students give presentations on the structural behavior, load path, and design of an iconic long-span precedent structure from around the world. Part of a midterm project for ARCH 5230: Structural Systems taught by Prof. Demi Fang. Please plan to enter between presentations.",
  },
  {
    name: "New Collaborative Research Showcase",
    location: "Cabral Center",
    start: "10:30",
    end: "12:00",
    department: "CAMD/Research",
    eventType: "Showcase",
    description:
      "A series of short talks on groundbreaking collaborative research projects in CAMD. Researchers and creative practitioners across disciplines present seven-minute talks on work spanning biohybrid smart textiles, health data sonification, AI-human creativity, and sustainable urban planning.",
  },
  {
    name: "The State of Journalism — and Its Future: Dean's Distinguished Lecture with Michael Slackman",
    location: "Cabral Center",
    start: "16:30",
    end: "18:00",
    department: "CAMD/Journalism",
    eventType: "Book Talk",
    description: "",
  },
  {
    name: "College of Arts, Media and Design Student Showcase",
    location: "Curry Indoor Quad",
    start: "10:00",
    end: "14:00",
    department: "CAMD",
    eventType: "Showcase",
    description: "",
  },
  {
    name: "Embodied Presentation Skills",
    location: "Cabral Center",
    start: "9:00",
    end: "10:00",
    department: "CAMD/Comm Studies/Theatre",
    eventType: "Workshop",
    description:
      "A 20-minute practical workshop giving participants tools to deliver more impactful presentations. Anchored in embodied rhetoric, attendees learn physical and mental preparation strategies to awaken their body, voice, speaking, and delivery.",
  },
  {
    name: 'Open Rehearsal: "Proxies" by Ilya Vidrin',
    location: "Studio Theatre, CSC",
    start: "11:00",
    end: "12:00",
    department: "CfA/Theatre",
    eventType: "Open Classroom",
    description: "",
  },
  {
    name: '"Governing Babel": Book Talk with John Wihbey',
    location: "Snell 350/350A",
    start: "12:00",
    end: "13:30",
    department: "CTM/Comm Studies",
    eventType: "Book Talk",
    description: "",
  },
  {
    name: "Stabilized Earth Blocks (SEB) Research Samples Showcase with Killion Mokwete",
    location: "Ryder Hall Arch Hallway",
    start: "9:00",
    end: "17:00",
    department: "SoA",
    eventType: "Showcase",
    description: "",
  },
  {
    name: "Africa Built Heritage: Digital Documentation of Heritage Sites in Benin VR Demonstration with Killion Mokwete",
    location: "Ryder Hall Arch Hallway / MSO",
    start: "9:00",
    end: "11:00",
    department: "SoA",
    eventType: "Showcase",
    description: "",
  },
  {
    name: "Benin Built Heritage: Master's Student Research Showcase",
    location: "Ruggles",
    start: "9:00",
    end: "17:00",
    department: "SoA",
    eventType: "Showcase",
    description: "",
  },
  {
    name: "Inside PR with CAMD Alumni: Strategy, Storytelling, and Real World Impact",
    location: "Cabral Center",
    start: "14:00",
    end: "15:00",
    department: "Comm Studies",
    eventType: "Book Talk",
    description: "",
  },
  {
    name: "Sense: The Act of Engaging",
    location: "Raytheon",
    start: "10:00",
    end: "12:00",
    department: "CAMD/PhD",
    eventType: "Showcase",
    description:
      "A group exhibition from the CAMD PhD Program in Interdisciplinary Design and Media, featuring immersive installations, sound art, data physicalization, augmented reality, and game design. The exhibition examines how our senses are structured by perception and how they might be reconfigured.",
  },
  {
    name: "Open Classroom: ARCH 5120: Comprehensive Design",
    location: "Ruggles",
    start: "13:35",
    end: "17:00",
    department: "SoA",
    eventType: "Open Classroom",
    description:
      'A pin-up review open to all — walk through the studio and observe or participate in discussions around programming and 1/16" scale models of student proposals.',
  },
  {
    name: "Open Classroom: ARCH 6340: AI in Architecture",
    location: "Ryder 299",
    start: "9:50",
    end: "11:30",
    department: "SoA",
    eventType: "Open Classroom",
    description:
      "Students hold a debate on the use of AI in architectural pedagogy at Northeastern University, with background context from the instructor and planned audience participation and conversation.",
  },
];

const EVENT_TYPE_COLORS = {
  "Open Classroom": "#DB5322",
  Showcase: "#0097C2",
  "Book Talk": "#992EFC",
  Workshop: "#548C2F",
  // Music: "#CC0068",
  // "Communication Studies": "#F9CB40",
};

export function render() {
  return `
    <section class="section-full flex flex-col p-5 pb-2 mt-14 mb-4 font-akshar" id="schedule">
      <!-- Header -->
      <h1 class="text-5xl sm:text-7xl lg:text-8xl xl:text-[110px] font-medium leading-tight mt-6 mb-4 pl-12">SCHEDULE</h1>

      <!-- Schedule Legend -->
      <div class="flex flex-row justify-start items-center w-full mb-2 pl-12">
        <div class="flex flex-wrap gap-4 justify-center">
          ${Object.entries(EVENT_TYPE_COLORS)
            .map(
              ([dept, color]) => `
              <div class="flex items-center">
                <div class="w-4 h-4 mr-2 rounded-sm" style="background-color: ${color};"></div>
                <span class="text-sm">${dept}</span>
              </div>
            `,
            )
            .join("")}
        </div>
      </div>

      <!-- Main Schedule -->
      <div class="mx-12">
        <div class="w-full h-6 bg-[#67192F]"></div>
        <div class="relative w-full h-[65vh] overflow-scroll" id="schedule-frame">
          <div id="schedule-times" style="height: ${SCHEDULE_SCROLL_HEIGHT}vh;" class="absolute top-0 left-0 grid grid-rows-12 z-50 pointer-events-none"></div>
          <div id="schedule-events" style="height: ${SCHEDULE_SCROLL_HEIGHT}vh;" class="absolute top-0 left-0 w-full flex flex-row px-24 gap-8 overscroll-none text-[#F6F6F6]"></div>
          <div id="event-modal-container" class="sticky top-0 left-0 flex h-full justify-center items-center pointer-events-none z-[999]"></div>
        </div>
        <div class="w-full h-6 bg-[#67192F]"></div>
      </div>
    </section>
  `;
}

export function init() {
  renderSchedule();
  mountFilter();
  setupDepartmentFilters();

  const eventModalContainer = document.getElementById("event-modal-container");
  eventModalContainer.style.height =
    document.getElementById("schedule-frame").offsetHeight + "px"; // Ensure modal container covers the entire schedule area
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

  // Populating events
  EVENTS.sort((a, b) => {
    return militaryTimeToNumber(a.start) - militaryTimeToNumber(b.start);
  }).forEach((eventItem) => {
    const event = document.createElement("button");
    event.className =
      "flex items-start justify-center p-2 w-30 text-start text-lg font-light overflow-ellipsis z-10 focus:outline-none cursor-pointer";
    event.textContent = `${eventItem.name}`;
    event.style.backgroundColor = EVENT_TYPE_COLORS[eventItem.eventType];
    event.onclick = () => showModal(eventItem);

    const eventDuration =
      militaryTimeToNumber(eventItem.end) -
      militaryTimeToNumber(eventItem.start);
    const eventDayDuration =
      timeSlots[timeSlots.length - 1].value - timeSlots[0].value + 1;
    const eventStartOffset =
      militaryTimeToNumber(eventItem.start) - timeSlots[0].value;

    event.style.height = `${(eventDuration / eventDayDuration) * SCHEDULE_SCROLL_HEIGHT}vh`;
    event.style.marginTop = `${(eventStartOffset / eventDayDuration) * SCHEDULE_SCROLL_HEIGHT}vh`;

    scheduleEvents.appendChild(event);
  });

  // Creating time labels and grid lines
  timeSlots.forEach((slot, index) => {
    const label = document.createElement("div");
    label.textContent = slot.label;
    label.className =
      "text-left text-xl text-gray-dk whitespace-nowrap py-2 pl-2 z-99";
    label.style.gridRowStart = index + 1;
    scheduleTimes.appendChild(label);

    const line = document.createElement("div");
    line.className = "absolute left-0 h-[1px] bg-gray-300 z-0"; // Extend line beyond schedule height to account for padding
    line.style.top = `${(index / timeSlots.length) * 100}%`;
    line.style.width = scheduleEvents.scrollWidth + "px"; // Extend line width to cover entire schedule width (including padding)
    console.log(scheduleEvents.scrollWidth);
    scheduleEvents.appendChild(line);
  });
};

// Shows the event modal for some item. Clicking anywhere on the blackened area outside the modal will close it.
const showModal = (eventItem) => {
  const modalContainer = document.getElementById("event-modal-container");
  modalContainer.style.display = "flex";
  modalContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Semi-transparent black background
  modalContainer.style.pointerEvents = "auto"; // Enable pointer events to allow clicking outside the modal to close it
  modalContainer.innerHTML = `
    <div class="max-h-[70%] max-w-[50%] flex flex-col items-center justify-between gap-2 rounded-md p-4 text-[#F6F6F6]" style="background-color:${EVENT_TYPE_COLORS[eventItem.eventType]};">
      <h3 class="max-w-full text-4xl p-2 font-medium">${eventItem.name}</h3>
      <div class="max-w-full flex flex-row gap-8 text-xl font-medium">
        <div class="flex flex-row gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
            <path d="M11.2387 0C5.02875 0 0 5.04 0 11.25C0 17.46 5.02875 22.5 11.2387 22.5C17.46 22.5 22.5 17.46 22.5 11.25C22.5 5.04 17.46 0 11.2387 0ZM14.9513 16.5487L10.125 11.7113V5.625H12.375V10.7887L16.5487 14.9625L14.9513 16.5487Z" fill="white"/>
          </svg>
          <h4>${militaryTimeToStandard(eventItem.start)} - ${militaryTimeToStandard(eventItem.end)}</h4>
        </div>
        <div class="flex flex-row gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="23" viewBox="0 0 16 23" fill="none">
            <path d="M7.875 0C3.52125 0 0 3.52125 0 7.875C0 13.7812 7.875 22.5 7.875 22.5C7.875 22.5 15.75 13.7812 15.75 7.875C15.75 3.52125 12.2288 0 7.875 0ZM7.875 10.6875C6.3225 10.6875 5.0625 9.4275 5.0625 7.875C5.0625 6.3225 6.3225 5.0625 7.875 5.0625C9.4275 5.0625 10.6875 6.3225 10.6875 7.875C10.6875 9.4275 9.4275 10.6875 7.875 10.6875Z" fill="white"/>
          </svg>
          <h4>${eventItem.location}</h4>
        </div>
      </div>
      ${eventItem.description ? `<p class="mt-4 font-light">${eventItem.description}</p>` : ""}
    </div>
  `;

  // Close modal on click outside
  modalContainer.onclick = (e) => {
    if (e.target === modalContainer) {
      modalContainer.innerHTML = "";
      modalContainer.style.display = "none";
      modalContainer.style.pointerEvents = "none"; // Disable pointer events when modal is closed so it doesn't block clicking events
    }
  };

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modalContainer.innerHTML = "";
      modalContainer.style.display = "none";
    }
  });
};

// Utility function for coverting military time string to standard time string
const militaryTimeToStandard = (timeString) => {
  const [hours, minutes] = timeString.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const standardHours = hours % 12 === 0 ? 12 : hours % 12;
  return `${standardHours}:${minutes.toString().padStart(2, "0")} ${period}`;
};

// Utility function to convert military time string to numeric value
// Example: "8:00" -> 8.0, "9:30" -> 9.5, "13:45" -> 13.75
const militaryTimeToNumber = (timeString) => {
  const [hours, minutes] = timeString.split(":").map(Number);
  return hours + minutes / 60;
};
