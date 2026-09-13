export const roles = [
  { id:"fullstack", title:"Full Stack Developer", short:"Build modern web products end-to-end.", desc:"React/Next.js, APIs, databases, authentication, testing and system thinking.", skills:["JavaScript / TypeScript","React / Next.js","APIs & databases","Auth & testing","System design basics"] },
  { id:"aiml", title:"AI / ML Engineer", short:"Build and explain practical AI systems.", desc:"Python, ML foundations, LLM apps, evaluation, data pipelines and responsible AI.", skills:["Python","ML fundamentals","LLM applications","Evaluation","Data & experimentation"] },
  { id:"data", title:"Data Analyst / Data Science", short:"Turn data into decisions.", desc:"SQL, Python, statistics, dashboards, experimentation and business reasoning.", skills:["SQL","Python / pandas","Statistics","Dashboards","Business cases"] },
  { id:"cloud", title:"Cloud / DevOps Engineer", short:"Ship reliable software and infrastructure.", desc:"Linux, networking, CI/CD, containers, cloud fundamentals, observability and security.", skills:["Linux","Networking","Docker","CI/CD","Cloud & observability"] },
  { id:"cyber", title:"Cybersecurity Engineer", short:"Protect systems and investigate risk.", desc:"Security fundamentals, web security, identity, threat thinking, logging and incident response.", skills:["Web security","Identity","Threat modeling","Logs & monitoring","Incident response"] }
];

export const lessons = [
  { id:"resume", title:"Build an interview-ready resume", tag:"Foundation", mins:14, body:["Your resume is an evidence map, not a list of every technology you have seen. Keep the target role visible and prioritize projects, internships, coursework and outcomes that support it.","For every project, know the problem, your contribution, one important technical decision, one failure and what you would improve today.","Use numbers only when they are real: users, records, latency, revenue, accuracy, time saved or another measurable result."], practice:"Choose one project and explain the problem, your contribution and the result in 90 seconds." },
  { id:"project", title:"Explain a project like an engineer", tag:"Communication", mins:12, body:["Use a repeatable structure: problem → constraints → approach → your contribution → trade-off → result → lesson.","Expect follow-ups: Why this database? Why this model? How did you test it? What broke? What happens at ten times the traffic?","The goal is not to sound complicated. The goal is to prove you understand the system you built and the decisions you made."], practice:"Explain one technical decision and the alternative you rejected." },
  { id:"problem", title:"Problem solving under pressure", tag:"Technical", mins:15, body:["Before coding, restate the problem and clarify inputs, outputs and constraints. A correct solution to the wrong problem is still a bad interview answer.","Break the problem into smaller checks. Reproduce bugs before changing code. Test the smallest useful hypothesis first.","When stuck, communicate what you know, what you tried and what evidence would change your next step."], practice:"Describe how you would debug an API that suddenly became slow." },
  { id:"behavioral", title:"Behavioral answers with real evidence", tag:"Interview", mins:11, body:["A concise STAR-style answer works well: situation, task, action and result. Spend most of the answer on what you actually did.","Do not invent leadership or impact. A small honest example is stronger than an inflated story.","Finish with what you learned or what you would do differently now."], practice:"Tell a short story about something you built that did not work as expected." },
  { id:"technical-round", title:"Prepare for a technical round", tag:"Technical", mins:18, body:["Technical interviews test reasoning as much as memory. Practice explaining assumptions, complexity, edge cases and trade-offs.","For system questions, start with requirements and scale before naming tools. For coding questions, talk through a simple approach before optimizing.","For AI roles, be ready to explain data quality, evaluation, hallucinations, latency, cost and why a model or retrieval strategy was chosen."], practice:"Design a small service that receives user text and returns a ranked result. Explain the API, data model and failure cases." },
  { id:"ai-work", title:"Use AI without outsourcing your thinking", tag:"Modern work", mins:12, body:["AI tools are useful for learning, debugging and iteration, but interviewers still evaluate whether you understand the output.","When using AI, verify claims, run the code, inspect edge cases and be able to explain the final implementation without the tool.","A strong candidate can say what AI helped with, what they changed and what they independently validated."], practice:"Describe one way AI could help you build faster while keeping your own technical judgment in control." },
  { id:"startup", title:"Prepare for startup internships", tag:"Career", mins:13, body:["Startups often value ownership, learning speed and judgment alongside technical skill.","Prepare examples where requirements were incomplete. Explain how you chose what to do first and how you communicated uncertainty.","Be ready to discuss trade-offs between a quick first version and a more robust solution."], practice:"You have one day to ship a rough version. What would you cut and why?" },
  { id:"remote", title:"Prepare for remote interviews", tag:"Modern hiring", mins:9, body:["Test microphone, camera, browser permissions and your connection before the call.","Keep notes short. Reading a script word-for-word makes strong answers feel less natural.","Practice concise explanations and pause between ideas so the interviewer can guide depth."], practice:"Give your 45-second introduction as if the interview has just started." }
];

export const notes = {
  fullstack:[
    ["HTTP & APIs","Know request/response, status codes, headers, cookies, authentication, caching and idempotency. Be able to explain what happens from browser click to database response."],
    ["React / Next.js","Understand state, rendering, server/client boundaries, forms, loading/error states and why unnecessary client JavaScript hurts performance."],
    ["Databases","Know primary keys, indexes, relationships, transactions and why a query becomes slow. Explain one schema you designed."],
    ["System thinking","Start with requirements, traffic, data and failure cases. Only then choose services."],
    ["Testing","Know unit vs integration vs end-to-end testing and how you would test a critical API."],
  ],
  aiml:[
    ["ML fundamentals","Know train/validation/test splits, overfitting, leakage, precision, recall and why a metric must match the business problem."],
    ["LLM applications","Understand prompts, context windows, retrieval, structured output, tool use and evaluation. Do not assume a larger model solves every problem."],
    ["RAG","Explain chunking, embeddings, retrieval, reranking and how you would measure whether retrieval actually helps."],
    ["AI reliability","Discuss hallucination, prompt injection, sensitive data, monitoring, fallback behavior and human review."],
    ["Production AI","Know latency, token cost, caching, rate limits and model fallbacks. Measure before optimizing."],
  ],
  data:[
    ["SQL","Practice SELECT, JOIN, GROUP BY, HAVING, window functions, CTEs and NULL behavior. Explain why duplicates appear after joins."],
    ["Statistics","Understand distributions, sampling, correlation vs causation, confidence intervals and basic hypothesis testing."],
    ["Product analytics","Define the decision first. Then metric, denominator, segment, time window and data source."],
    ["Experimentation","Know control/treatment, randomization, primary metric, guardrails and why peeking can mislead results."],
    ["Data storytelling","Start with the decision and evidence, not the chart. State uncertainty and the next action."],
  ],
  cloud:[
    ["Linux","Know processes, ports, files, permissions, environment variables, logs and common networking commands."],
    ["Containers","Explain images, containers, layers, environment configuration, health checks and why containers are not virtual machines."],
    ["CI/CD","Understand build, test, artifact, deployment, rollback and secrets. Know how a bad deployment is detected."],
    ["Networking","Know DNS, HTTP, TLS, load balancing, private/public networks and basic latency sources."],
    ["Observability","Explain logs, metrics and traces. Pick a signal before changing infrastructure."],
  ],
  cyber:[
    ["Web security","Know authentication vs authorization, XSS, CSRF, SQL injection, SSRF and secure input handling."],
    ["Identity","Understand sessions, tokens, MFA, least privilege and why secrets belong outside client code."],
    ["Threat modeling","Identify assets, entry points, trust boundaries, likely threats and mitigations."],
    ["Detection","Know what useful logs look like and how alerts can be noisy. Preserve evidence during an incident."],
    ["Secure engineering","Use dependency updates, validation, secure defaults and code review as layers rather than one magic control."],
  ]
};

export const tips = [
  ["Know every line of your resume","If you list a technology, be ready to explain where and why you used it."],
  ["Use numbers only when real","Evidence is useful; invented metrics destroy trust."],
  ["Say what you do not know","Explain how you would verify the answer instead of guessing confidently."],
  ["Practice aloud","Knowing a concept and explaining it under pressure are different skills."],
  ["Ask better questions","Evaluate the role too: mentorship, expectations, problem, team and success criteria."],
  ["Use AI as a coach","Ask for feedback, then verify the feedback yourself. Your understanding must survive without the model."],
  ["Think before naming tools","Start with the requirement and constraints, then justify the technology."],
  ["Keep answers evidence-based","A small real project is more convincing than five buzzwords you cannot explain."],
];

export const quizzes = [
  { id:"fullstack-foundations", title:"Full Stack foundations", role:"Full Stack", questions:[
    {q:"What does HTTP 404 usually mean?",options:["Server crashed","Unauthorized","Resource not found","Request succeeded"],a:2,e:"404 means the server could not find the requested resource."},
    {q:"What is a primary key used for?",options:["Styling rows","Uniquely identifying records","Encrypting tables","Sorting every query"],a:1,e:"A primary key identifies each row uniquely."},
    {q:"What is a good first step when an API is unexpectedly slow?",options:["Rewrite everything","Measure and locate the bottleneck","Delete the database","Increase every timeout"],a:1,e:"Measure first. Logs and profiling help locate the actual bottleneck."},
    {q:"Which status code is commonly used after successful resource creation?",options:["200","201","301","404"],a:1,e:"201 Created is commonly used when a request successfully creates a resource."},
    {q:"What does an index generally improve?",options:["Every write","Selected query lookups","Password security","UI rendering"],a:1,e:"Indexes can make selected lookups faster, while adding write/storage overhead."}
  ]},
  { id:"ai-foundations", title:"AI / ML interview foundations", role:"AI / ML", questions:[
    {q:"Why keep a validation set?",options:["To store passwords","To tune choices without using the final test set","To guarantee accuracy","To replace training data"],a:1,e:"Validation data helps compare/tune approaches while preserving a final test set for a cleaner estimate."},
    {q:"What is data leakage?",options:["Slow training","Information from outside the allowed training process influencing the model","Missing data","A network outage"],a:1,e:"Leakage lets information unavailable at prediction time influence training or evaluation."},
    {q:"What does precision measure?",options:["Of predicted positives, how many were actually positive","All actual positives found","Training speed","Number of features"],a:0,e:"Precision is TP/(TP+FP). It focuses on the correctness of positive predictions."},
    {q:"What is a common RAG component?",options:["A retrieval step","A CSS framework","A DNS record","A database password"],a:0,e:"Retrieval brings relevant external context into the generation process."},
    {q:"Why evaluate an LLM application beyond one example?",options:["One example proves everything","Behavior can vary across inputs and failure modes","It removes latency","It guarantees no hallucinations"],a:1,e:"A test set exposes consistency, edge cases, safety and usefulness across many inputs."}
  ]},
  { id:"data-foundations", title:"Data & analytics foundations", role:"Data", questions:[
    {q:"Which clause filters grouped results?",options:["WHERE","HAVING","ORDER BY","LIMIT"],a:1,e:"HAVING filters groups after aggregation."},
    {q:"What does a LEFT JOIN preserve?",options:["Only right rows","All left rows plus matching right data","Only duplicates","No rows"],a:1,e:"A LEFT JOIN keeps every row from the left table and matches right-side rows when available."},
    {q:"Correlation proves causation.",options:["True","False","Only for large datasets","Only for SQL"],a:1,e:"Correlation alone does not establish a causal relationship."},
    {q:"What should you clarify first for an unclear analytics request?",options:["Dashboard colors","The decision and metric definition","Every possible column","A chart library"],a:1,e:"Clarify the decision, audience and exact definition of success before building."},
    {q:"Why can an average be misleading?",options:["Averages never work","Outliers or skew can hide the distribution","SQL changes it","It is always rounded"],a:1,e:"The mean can be pulled by outliers or hide very different subgroups."}
  ]},
  { id:"cloud-foundations", title:"Cloud & DevOps foundations", role:"Cloud / DevOps", questions:[
    {q:"What does DNS primarily do?",options:["Encrypt files","Map names to network addresses","Run containers","Store passwords"],a:1,e:"DNS resolves domain names to records such as IP addresses."},
    {q:"What is a container?",options:["A physical server","An isolated process environment sharing the host kernel","A database row","A DNS record"],a:1,e:"Containers package applications and dependencies while sharing the host kernel."},
    {q:"What is a rollback?",options:["Deleting all logs","Returning a deployment to a known previous version","Adding users","Changing a password"],a:1,e:"Rollback restores a previous known-good deployment when a new release causes problems."},
    {q:"Which signal records discrete application events?",options:["Logs","CSS","DNS","Images"],a:0,e:"Logs capture application/system events and context."},
    {q:"Why use CI?",options:["To avoid tests","To automate build/test checks on changes","To remove version control","To make all code public"],a:1,e:"Continuous integration automates validation of changes before they become harder to fix."}
  ]},
  { id:"cyber-foundations", title:"Cybersecurity foundations", role:"Cybersecurity", questions:[
    {q:"Authentication answers which question?",options:["What are you allowed to do?","Who are you?","How fast is the server?","Where is the database?"],a:1,e:"Authentication establishes identity; authorization determines what that identity may do."},
    {q:"Which is a common XSS defense?",options:["Output encoding/sanitization","Disabling backups","Increasing CPU","Changing DNS"],a:0,e:"Context-appropriate output encoding and safe handling reduce XSS risk."},
    {q:"Least privilege means:",options:["Everyone is admin","Give only the access needed","No one can log in","Passwords are optional"],a:1,e:"Least privilege minimizes permissions to reduce the impact of compromise or mistakes."},
    {q:"What is a trust boundary?",options:["A UI color","A point where data/control moves between different trust levels","A backup","A browser tab"],a:1,e:"Trust boundaries mark transitions where assumptions about identity or data trust change."},
    {q:"Why keep security logs?",options:["Only for design","To support detection, investigation and accountability","To make pages faster","To replace authentication"],a:1,e:"Useful logs provide evidence for detection and incident investigation."}
  ]}
];

export const videos = [
  {id:"computer-works",title:"How a Computer Works — from silicon to apps",domain:"Core engineering",duration:"42 min",type:"CC BY 3.0",embed:"https://www.youtube.com/embed/5f3NJnvnk7k",source:"https://commons.wikimedia.org/wiki/File:How_a_Computer_Works_-_from_silicon_to_apps.webm",note:"Creative Commons Attribution. Credit Improbable Matter."},
  {id:"javascript-functions",title:"The different types of JavaScript functions explained",domain:"Full Stack",duration:"15 min",type:"CC BY 3.0",embed:"https://www.youtube.com/embed/cMt9U6kCWsM",source:"https://commons.wikimedia.org/wiki/File:The_different_types_of_JavaScript_functions_explained.webm",note:"Creative Commons Attribution. Credit Kevin Powell."},
  {id:"sql-dashboard",title:"Using SQL in the Visual Dashboard",domain:"Data",duration:"2 min",type:"Public domain",embed:"https://www.youtube.com/embed/wVEVLGz4tyY",source:"https://commons.wikimedia.org/wiki/File:Using_SQL_in_the_Visual_Dashboard.webm",note:"U.S. CDC public-domain work as hosted on Wikimedia Commons."},
  {id:"sql-analysis",title:"Using SQL in Classic Analysis",domain:"Data",duration:"2 min",type:"Public domain",embed:"https://www.youtube.com/embed/9MGr5TguzFM",source:"https://commons.wikimedia.org/wiki/File:Using_SQL_in_Classic_Analysis.webm",note:"U.S. CDC public-domain work as hosted on Wikimedia Commons."},
  {id:"nasa-internship",title:"Ready for Your NASA Internship?",domain:"Career",duration:"Career guide",type:"Official NASA video",embed:"https://www.youtube.com/embed/5yL_8y59SaU",source:"https://www.youtube.com/watch?v=5yL_8y59SaU",note:"Official NASA career/internship guidance; not presented as public-domain unless the source says so."}
];

export const resources = [
  {title:"MDN Web Docs",desc:"Reliable web documentation for HTML, CSS, JavaScript and browser APIs.",url:"https://developer.mozilla.org/",tags:["fullstack"]},
  {title:"MIT OpenCourseWare",desc:"Free course materials and lectures from MIT. Check individual licensing before reuse.",url:"https://ocw.mit.edu/",tags:["all"]},
  {title:"Kaggle Learn",desc:"Short practical courses for Python, data analysis and machine learning.",url:"https://www.kaggle.com/learn",tags:["data","aiml"]},
  {title:"Microsoft Learn",desc:"Structured learning for cloud, developer tools and data technologies.",url:"https://learn.microsoft.com/training/",tags:["cloud","data","fullstack"]},
  {title:"OWASP",desc:"Open security guidance and practical application-security references.",url:"https://owasp.org/",tags:["cyber","fullstack"]},
  {title:"Google Cloud Skills Boost",desc:"Hands-on cloud learning and labs across modern infrastructure topics.",url:"https://www.cloudskillsboost.google/",tags:["cloud"]},
  {title:"Hugging Face Learn",desc:"Learning material for modern NLP, LLMs and machine-learning workflows.",url:"https://huggingface.co/learn",tags:["aiml"]},
  {title:"OpenStax",desc:"Free openly licensed textbooks useful for structured revision.",url:"https://openstax.org/",tags:["all"]}
];

export const blogs = [
 {slug:"why-ai-interview-practice-matters",title:"Why AI interview practice is useful — and what it cannot replace",cat:"AI Interview",body:["Reading interview tips is passive. A realistic question forces you to retrieve, explain and defend what you know. AI practice is useful because it can generate follow-ups and let you repeat weak areas without waiting for another person.","But AI should not replace real hiring conversations. UpForge uses it as a practice coach, not a recruiter or hiring decision-maker."]},
 {slug:"first-internship",title:"How to prepare for your first internship when you have little experience",cat:"Internship",body:["Your first internship does not require a perfect profile. It requires evidence that you can learn, build and communicate.","Start with the role. Read several internship descriptions and note repeated skills. Compare them with your current profile; the gaps become your learning plan."]},
 {slug:"tell-me-about-yourself",title:"How to answer Tell me about yourself as a student",cat:"Interview",body:["A good introduction is not your autobiography. It is a short bridge between where you are, what you have done and why the role makes sense.","Try: current stage → strongest evidence → what you are learning → why this opportunity. Keep it conversational."]},
 {slug:"explain-project",title:"How to explain your project in an interview",cat:"Technical Interview",body:["Start with the problem. Then explain the solution, your specific contribution, the most important technical decision and the result.","Expect follow-ups: Why this database? What broke? How did you test it? What happens at ten times the traffic?"]},
 {slug:"resume-internship",title:"Resume tips for internship applications",cat:"Resume",body:["For internships, projects, coursework and credible independent work can carry weight when they are specific.","Prefer evidence over adjectives. Describe what you built, what you owned and measurable results when you genuinely have them."]},
 {slug:"technical-interview-system-design",title:"How students should approach a system-design question",cat:"Technical",body:["You do not need to design a global platform in five minutes. Start with requirements, users, traffic assumptions, core data and the simplest architecture that works.","Then discuss one bottleneck and one trade-off. Interviewers learn more from your reasoning than from a long list of services."]}
];

export const pricing = {id:"upforge-49",name:"UpForge Personal",price:49,currency:"INR",period:"one-time",headline:"One focused preparation account",features:["Personal learning dashboard","Role-specific notes and roadmaps","Quizzes with explanations","Open learning + video library","Resume-aware AI study plan","AI practice feedback","Two free AI technical interview rounds","Progress saved to your account"],razorpayReady:true};
