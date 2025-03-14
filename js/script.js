const projects = [
    {
        title: "Beast Hunter",
        images: ["assets/beastHunter/beastHunterGameplay.png", "assets/beastHunter/beastHunterControls.png", "assets/beastHunter/beastHunterCode.png"],
        description: "Collaborated with 3 other students against over 10 other teams in a senior software development project, evaluated by industry professionals - Used Java libraries like AWT, Swing and JFrame to create customized graphics and design and implement different maps/levels from scratch; resulting in our executable 5-level single player computer game winning the competition - Leveraged project management tools such as Gantt charts (Microsoft Excel) and status reports spanning over 2 months to delegate tasks and coordinate work with other group members; resulting in more efficient and organized work, ensuring project was delivered on time. First introduction to software development.",
        videos: [],
        links: [],
        skills: {
            heading: "Skills",
            description: "Java, Project management (Task management, Gantt charts, excel), Collaboration, Leadership"
        }
    },
    {
        title: "Smart Glassware Storage System",
        images: ["assets/glassware/CAD.png", "assets/glassware/statusReport.png", "assets/glassware/dropTest.png"],
        description: "Worked in a group of 6 engineering undergrads to design and pitch a glassware storage system for a client researching in UofT’s chemical laboratories. Used CAD software like SolidWorks, as well as brainstorming and design thinking to develop and print a fully functioning prototype - Organized/contributed to weekly group meetings as well as biweekly client meetings, using Microsoft Project and LucidChart to maintain Gantt and flow charts/schedules; resulting in more organized task assignments and the preparation of 3 separate status reports reviewed by the group’s Engineering Manager. First instance of client involved engineering commission. .",
        videos: [],
        links: [],
        skills: {
            heading: "Skills",
            description: "Organization, CAD (SolidWorks), Project management, Status Reports, Microsoft Project, Prototyping, Gantt Charts"
        }

    },
    {
        title: "Pacman FPGA recreation",
        images: ["assets/FPGA/pacman.png", "assets/FPGA/blockDiagram.png", "assets/FPGA/quartus.png"],
        description: "Collaborated in a team to design and implement a simplified Pac-Man game using an FPGA board, keyboard, monitor, and VGA adapter. Programmed game logic in Verilog, utilizing finite state machines, always blocks, multiplexers, loops, counters and registers. The user controls Pac-Man with a keyboard to navigate the screen (displayed on the monitor via VGA adapter) and collect coins. The score is displayed on the FPGA board using LEDs. Tested the logic on FPGA boards and with ModelSim for verification. Used Quartus Prime for pin assignments and code compilation. Enhanced understanding of hardware vs. software development, digital logic testing, and software implementation in embedded systems. First project related to firmware/digital logic and FPGAs.",
        videos: [],
        links: [],
        skills: {
            heading: "Skills",
            description: "Altera FPGA Board, Verilog, Project Management, Digital logic, ModelSim, Quartus Prime"
        }
    },
    {
        title: "Autonomous Arduino Battlebot",
        images: ["assets/battlebot/groupPhoto.png", "assets/battlebot/robot.png"],
        description: "Worked in a team of 5 to design a prototype for an autonomous “sumo wrestling” style robot that connects motors, distance and colour sensors to an arduino and navigates a ring, with the goal of pushing other robots out of the ring. Used CAD software and 3d printing to create frame, and soldered motors onto frame.",
        videos: [],
        links: [],
        skills: {
            heading: "Skills",
            description: "Arduino microcontroller and sensors/actuators"
        }
    },
    {
        title: "Interactive Mapping Software",
        images: ["assets/GIS/darkMode.png", "assets/GIS/lightMode.png", "assets/GIS/code.png"],
        description: "I am currently leading a software development team of three members to create a high-performance mapping software with advanced navigation and AI-powered assistance. The software integrates worldwide map data from the OpenStreetMap (OSM) database and is designed for seamless usability and real-time information access. \n\n Key features include interactive map navigation with smooth panning and zooming, pathfinding and routing (currently in progress) for efficient directions, and city search functionality for quick location lookups. The software also integrates live weather data, scraped using libcurl, to provide real-time updates. Additionally, an AI-powered \"tour guide\" chatbot, connected via the Gemini AI API, enhances user experience by offering intelligent recommendations and insights based on location and user queries.\n\nThe software is developed in C++, using GTK for graphics rendering and Glade for UI design. Web scraping is handled through libcurl, and version control is managed with Git. The chatbot is seamlessly integrated using the Gemini AI API, enabling intelligent interactions within the application. To further enhance user experience, styling and UI improvements are being implemented directly in C++, ensuring optimal responsiveness and readability. Human factor research is being conducted to optimize responsiveness and useability",
        videos: [],
        links: [],
        skills: {
            heading: "Skills",
            description: "C++,Git,Project Management,Libcurl,GTK,Gemini API, Weather database APIs, Software development"
        }
    }
];

function loadProject(index) {
    const project = projects[index];
    
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-description").textContent = project.description;
    
    const projectImages = document.getElementById("project-images");
    projectImages.innerHTML = "";
    project.images.forEach(image => {
        const img = document.createElement("img");
        img.src = image;
        img.alt = project.title;
        img.classList.add("w-100", "h-auto", "mb-4");
        projectImages.appendChild(img);
    });
    
    const projectVideos = document.getElementById("project-videos");
    projectVideos.innerHTML = "";
    project.videos.forEach(video => {
        const vid = document.createElement("video");
        vid.src = video;
        vid.controls = true;
        vid.classList.add("w-full", "mt-4");
        projectVideos.appendChild(vid);
    });
    
    const projectLinks = document.getElementById("project-links");
    projectLinks.innerHTML = "";
    project.links.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.text;
        a.classList.add("block", "mt-2", "text-blue-500", "underline");
        projectLinks.appendChild(a);
    });
    
    document.getElementById("skills-heading").textContent = project.skills.heading;
    document.getElementById("skills-description").textContent = project.skills.description;

    document.addEventListener("click", function(event) {
        if (event.target.tagName === "IMG") {
            window.open(event.target.src, '_blank');
        }
    });
}
