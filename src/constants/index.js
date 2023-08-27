import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    java,
    c,
    cpp,
    swift,
    objc,
    whova,
    hkn,
    ersp,
    cse,
    qi,
    aisc,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "iOS developer",
      icon: web,
    },
    {
      title: "Full-stack Developer",
      icon: backend,
    },
    {
      title: "Hardware Security Researcher",
      icon: mobile,
    },
    {
      title: "CSE Undegraduate Tutor ",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
    {
      name: "python",
      icon: python,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "cpp",
      icon: cpp,
    },
    {
      name: "swift",
      icon: swift,
    },
    {
      name: "objc",
      icon: objc,
    },
  ];
  
  const experiences = [
    {
      title: "Full-stack Developer",
      company_name: "Whova Inc",
      icon: whova,
      iconBg: "#383E56",
      date: "July 2023 - September 2023",
      points: [
        "Developed scalable front-end and back-end applications in Swift and Objective-C, leveraging their unique features and frameworks, ensuring high availability, low latency (utilizing asynchronous API calls), and scalability.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Improved code quality through unit testing, automation, and code reviews, while collaborating with product and design teams to translate end-user requirements into effective technical solutions.",
      ],
    },
    {
      title: "Spatlab Acoustic modeling, spatialization, and media programming",
      company_name: "Qualcomm Institute Spatlab",
      icon: qi,
      iconBg: "#373737",
      date: "March 2023 - June 2023",
      points: [
        "Developing a Network model that can produce personalized Head-Related Transfer Function to improve user's hearing experience.",
        "Using Python and CUDA to create the model.",
      ],
    },
    {
      title: "Artificial Intelligence Software Developer",
      company_name: "Artificial Intelligence Student Collective @ University of California, San Diego",
      icon: aisc,
      iconBg: "#242424",
      date: "March 2023 - June 2023",
      points: [
        "Create an application/service that helps people gather image data through contributions from the masses, enabling more people to create higher-quality CV applications without having to collect data",
        "Creating a way to validate the data to ensure that it is in accordance with the user's needs.",
        "Developing a Siamese Network with shared weights to map text to images.",
        "Using triplet loss for training the model.",
      ],
    },
    {
      title: "Front-end Developer",
      company_name: "IEEE - Eta Kappa Nu (HKN) University of California, San Diego",
      icon: hkn,
      iconBg: "#FFFFFF",
      date: "February 2023 - Present",
      points: [
        "Developed the official website for Hard Hack 2023, San Diego's largest hardware-focused hackathon, using HTML, CSS, and JavaScript to deliver an engaging and interactive user experience.",
        "Collaborated with Triton Engineering Student Council and other student organization supporters to procure and leverage cutting-edge technology, enhancing the efficiency and seamless execution of event operations.",
        "Developing Snackatron, a user-friendly website utilizing React.js, enabling HKN members to conveniently purchase snacks from the HKN inventory, streamlining the snack purchasing process.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Hardware Security Researcher",
      company_name: "Early Research Scholars Program @ University of California, San Diego",
      icon: ersp,
      iconBg: "#E6DEDD",
      date: "September 2022 - June 2023",
      points: [
        "Identified structural traces in ISOLOCK-locked sequential circuits for revealing logic locking keys using synthesis, and topological analysis algorithms.",
        "Collected training data for machine learning model using diverse circuit and logic locking algorithms and gained expertise in neural network design, architecture, hardware design, and manufacturing flow.",
        "Led a group of undergraduate students in constructing a research proposal, developing Global Regularity Analysis on Deceptive Mux Attack in Python, and presenting at the Jacob’s School of Engineering Undergraduate Research Symposium.",
      ],
    },
    {
      title: "Computer Science Tutor",
      company_name: "CSE University of California, San Diego",
      icon: cse,
      iconBg: "#FFFFFF",
      date: "January 2022 - June 2023",
      points: [
        "Tutored for advanced data structures course (CSE 100) in C++ with a team of 30 tutors and TAs, under the leadership of Professor Niema Moshiri",
        "Testing and identifying edge cases in C++ programming assignments, ensuring the accuracy of the automatic grader before assignment release",
        "Tutored for introductory programming courses (CSE 8A and CSE 8B) with a team of 20 tutors and TAs, providing support in Java and Python, and programming logic/concepts. Hosted 10 hours of weekly office hours for clarification, guidance, and assistance with programming assignments and Python module setups on multiple platforms",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I have been thoroughly impressed by Kenzo’s academic excellence and personal qualities, and he has my highest recommendation for your program. His curiosity, combined with his ability to thrive in a team, leads me to believe there will be no limits to his achievements and growth in your program.",
      name: "Niema Moshiri",
      designation: "Associate Teaching Professor",
      company: "CSE University of California, San Diego",
      image: "",
    },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };