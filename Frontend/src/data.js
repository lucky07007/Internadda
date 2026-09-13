export const roles = [
  { id:"frontend", title:"Frontend Developer", subtitle:"React, JavaScript & web fundamentals" },
  { id:"backend", title:"Backend Developer", subtitle:"APIs, databases & system thinking" },
  { id:"fullstack", title:"Full Stack Developer", subtitle:"Build, debug and explain complete products" },
  { id:"data", title:"Data Analyst", subtitle:"SQL, Excel, analytics & business thinking" },
  { id:"aiml", title:"AI / ML Intern", subtitle:"Python, ML concepts & practical projects" },
  { id:"product", title:"Product / Business Intern", subtitle:"Problem solving, research & communication" },
];

export const lessons = [
 {id:"resume",title:"Make your resume interview-ready",tag:"Foundation",mins:12,desc:"Learn what recruiters scan first and how to turn projects into evidence."},
 {id:"tell-story",title:"Tell your project story clearly",tag:"Communication",mins:10,desc:"Use a simple structure to explain what you built, why it mattered and what you learned."},
 {id:"debugging",title:"Think like a strong problem solver",tag:"Technical",mins:14,desc:"Build a repeatable debugging approach instead of guessing fixes."},
 {id:"behavioral",title:"Answer behavioral questions with evidence",tag:"Interview",mins:11,desc:"Turn experiences into concise, credible answers without sounding rehearsed."},
 {id:"startup",title:"Prepare for startup internships",tag:"Career",mins:13,desc:"Understand ownership, ambiguity, speed and practical decision-making."},
 {id:"remote",title:"Prepare for remote interviews",tag:"Modern hiring",mins:9,desc:"Improve clarity, setup, written communication and online interview habits."},
];

export const tips = [
 ["Don't memorize answers","Prepare stories and principles. Interviewers notice when an answer sounds copied."],
 ["Know every line of your resume","If you list a technology, be ready to explain where you used it and what trade-off you made."],
 ["Use numbers when they are real","Latency, users, rows, conversion, time saved or accuracy make project impact concrete."],
 ["Say what you don't know","A thoughtful explanation of how you would find the answer is stronger than confident guessing."],
 ["Practice aloud","Knowing a concept and explaining it under pressure are different skills."],
 ["Ask better questions","A strong candidate also evaluates the team, problem, mentorship and expectations."],
];

export const blogs = [
 {slug:"how-to-prepare-first-internship",title:"How to prepare for your first internship when you have little experience",category:"Internship",read:"7 min",excerpt:"A practical preparation plan for students who have projects but not much professional experience."},
 {slug:"tell-me-about-yourself",title:"How to answer “Tell me about yourself” as a student",category:"Interview",read:"6 min",excerpt:"A simple structure for a natural introduction that connects your background to the role."},
 {slug:"explain-project-interview",title:"How to explain your project in an interview",category:"Technical Interview",read:"8 min",excerpt:"How to discuss architecture, decisions, failures and results without turning your answer into a lecture."},
 {slug:"resume-internship",title:"Resume tips for internship applications",category:"Resume",read:"8 min",excerpt:"What to keep, what to remove and how to make project experience easier to evaluate."},
 {slug:"startup-interview",title:"What is different about startup internship interviews?",category:"Startups",read:"7 min",excerpt:"Startups often test ownership, speed, judgment and learning ability alongside technical skills."},
 {slug:"remote-interview",title:"Remote interview preparation: a student checklist",category:"Remote Hiring",read:"5 min",excerpt:"A practical checklist for audio, camera, environment, communication and online interview etiquette."},
];

export const blogBodies = {
 "how-to-prepare-first-internship": ["Your first internship does not require a perfect profile. It requires evidence that you can learn, build and communicate.","Start with the role. Read several internship descriptions and write down the repeated skills. Then compare that list with your resume. The gaps become your learning plan.","Next, choose two projects you can explain deeply. Know the problem, your contribution, the technical decisions, one mistake and what you would improve today.","Finally, practice communication. A student who can explain a simple project clearly often creates more confidence than someone who lists ten technologies without depth."],
 "tell-me-about-yourself": ["A good introduction is not your autobiography. It is a short bridge between where you are, what you have done and why this role makes sense.","A useful structure is: current stage → strongest evidence → what you are learning → why this opportunity. Keep it conversational and adapt it to the role.","Avoid reading your resume aloud. The interviewer already has it. Use the introduction to give them a map of the story you want to discuss."],
 "explain-project-interview": ["Start with the problem. Then explain the solution, your specific contribution, the most important technical decision and the result.","Be ready for follow-ups: Why this database? What broke? How did you test it? What happens at ten times the traffic? What would you change now?", "The goal is not to sound complex. The goal is to show that you understand what you built and can reason about trade-offs."],
 "resume-internship": ["For internships, projects, coursework and credible independent work can carry significant weight when they are specific.","Prefer evidence over adjectives. Instead of saying ‘excellent React developer’, describe the product you built, the functionality you owned and measurable results when you genuinely have them.","Keep the resume easy to scan. Remove tools you cannot discuss and give more space to the two or three experiences that best match the role."],
 "startup-interview": ["Startup teams often have less time and more ambiguity. You may be asked how you would prioritize, debug something unfamiliar or ship a first version with incomplete information.","Prepare examples where you took ownership without waiting for perfect instructions. Explain how you decided what mattered first and how you communicated uncertainty.","Technical depth still matters. The difference is that practical judgment and learning speed may be tested alongside it."],
 "remote-interview": ["Remote interviews add another communication layer. Test your microphone, camera, browser permissions and connection before the call.","Keep your environment quiet and your notes short. Looking away constantly to read a script can make an otherwise strong answer feel less natural.","Practice concise explanations. Online calls make interruptions and long answers harder to recover from, so pause and let the interviewer guide the depth."],
};
