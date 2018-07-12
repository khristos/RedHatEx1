




### Section 1 - Design & Development
Q1
Could you outline what you would consider to be the important considerations if you were asked to develop an enterprise-level web application?

A.
- Bring value to the user
- Scalability
- Security, Redundancy
- Speed
- Reliability, Usability, Monitoring
- Design

Q2
Describe the approach you take in testing your applications.

Q3
What do you value in a code base?

A. 
- Simplicity
- Clean code
- Limited Dependencies
- Documentation, On-boarding
- Building, Testing, Integration Process
- System Thinking
- Open Standards


### Section 2 - General 
Q1
Tell us about a Red Hat product or open source project you really like, and why.

A. The Patternfly UI library because of its relevance to my skills and interest.

Q2
What do you find most exciting or interesting about working in the software development field?

Q3
In your career to date, what are you most proud of and why?

A. The opportunity to contribute to the Front-End tooling of my last permanent employer. 
   I was also involved with developing a JavaScript API for communication between an online course and a Learning Management System.


### Exercise 3: Fix The Sidebar 
The right sidebar here has fallen down below the content. Show us some different ways you
could fix it:

https://codepen.io/andresgalante/pen/WpwVzV

1. Reduce width in .section or .aside

        section { 
          background: lightgreen;
          width: 72%;
          float: left;
        }

        aside { 
          background: pink;
          width: 23%;
          float: right;
        }

2. Adjust margin

        aside { 
          background: pink;
          width: 25%;
          float: right;
          margin-right: -35px;
        }

