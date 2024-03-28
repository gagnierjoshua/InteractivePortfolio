import React, { useEffect } from "react";
import { Button, Popover } from "flowbite-react";

const Skills = () => {
  const collaboration = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="px-3 py-2">
        <p>
          Career built on collaborating with teachers accross my school
          district, University professors, and industry professionals to create
          engaging and effective STEM curriculum, programs, events, and support
          for students and teachers.
        </p>
      </div>
    </div>
  );

  const presentation = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="px-3 py-2">
        <p>
          Hired as a workshop trainer, teaching every day, and being selected a
          multitude of times to present at STEM industry conferences I have
          built a strong professional reputation for my ability to present
        </p>
      </div>
    </div>
  );

  const creativity = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="px-3 py-2">
        <p>
          Software, people, and educational delivery I have approached
          creatively to solve problems and create engaging and effective
          solutions.
        </p>
      </div>
    </div>
  );

  const adaptability = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="px-3 py-2">
        <p>
          Software language, clients, organization, students, peers, leadership
          team, challenge, I am quickly able to learn, adapt, and excel as
          demonstrated in my projects technically and partnerships
          professionally.
        </p>
      </div>
    </div>
  );

  const mentorship = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="px-3 py-2">
        <p>
          Master Teacher for nine UCI Physics student teachers over six years
          from the CalTeach and Masters in Teaching program at UCI. In mentoring
          I have worked to turn aspiring teachers into leaders in the
          educational space, presenting at industry conferences collaboratively
          with them as peers. As a strong mentor, I also am very receptive to
          and always looking for mentorship.
        </p>
      </div>
    </div>
  );

  const reductionism = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="px-3 py-2">
        <p>
          Taking the complex and making it simple and understanble has been the
          nature of my career. College level Physics for Sophmores? It can be
          broken down. Engineering projects for 5th gradres? It can be broken
          down. Simplifying complex concepts and tasks into maneagable and
          understandable components is an expertise of mine.
        </p>
      </div>
    </div>
  );

  const agile = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="px-3 py-2">
        <p>
          In my development tasks, engineering projects, and educational
          programs I have been able to implement agile methodologies. Soldifying
          and in preperation for a full tech career has culminated in my
          receiving of the PSM1 Scrum Master certification.
        </p>
      </div>
    </div>
  );

  const learner = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="px-3 py-2">
        <p>
          Whether it be a different subject to teach, technology to implement,
          or a new software language to learn you will find me professionally
          and personally experimenting, researching, and applying new knowledge.
        </p>
      </div>
    </div>
  );

  const typescript = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="px-3 py-2">
        <p>This website was designed with Typescript!</p>
      </div>
    </div>
  );

  const js = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="px-3 py-2">
        <p>
          This website utilizes JavaScript for several of its features, as well
          my Chrome Extensions were developed utilizing a JavaScript frontend.
        </p>
      </div>
    </div>
  );

  const tailwind = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="px-3 py-2">
        <p>This website was designed with Tailwind CSS!</p>
      </div>
    </div>
  );

  const css = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="px-3 py-2">
        <p>
          This website utilizes CSS for several of its features, as well has
          been a tool I use to quickly spin up calculators for students for
          Physics problems for labs.
        </p>
      </div>
    </div>
  );

  const python = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      \
      <div className="px-3 py-2">
        <p>
          Scripts, Deep Learning, Data Analysis, Text Cleaning, and much more!
          Python is a go to development tool for myself!
        </p>
      </div>
    </div>
  );

  const go = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      \
      <div className="px-3 py-2">
        <p>
          For backend API development Go has become my languge of preference due
          to ease of use and strong integration with other languages!{" "}
        </p>
      </div>
    </div>
  );

  const react = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      \
      <div className="px-3 py-2">
        <p>This website was designed with React elements and libraries!</p>
      </div>
    </div>
  );

  const next = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      \
      <div className="px-3 py-2">
        <p>
          This website utilized Next js for its static site generation
          supporting the React components!
        </p>
      </div>
    </div>
  );

  const cpp = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="px-3 py-2">
        <p>
          Games! Embedded! Crud Applications! C++ is a language I have used for
          a variety of projects and applications and am always exploring. My C++
          knowledge and explorations has made me a better developer in all
          domains of software engineering.
        </p>
      </div>
    </div>
  );

  const arduino = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="px-3 py-2">
        <p>
          Embedded systems, IoT, and robotics have been a passion of mine for
          years and Arduino has been a go to platform for me to build and teach
          with. Truly my bread and butter, I can design and code most things
          from idea to physical protoype with Arduino.
        </p>
      </div>
    </div>
  );

  const aws = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="px-3 py-2">
        <p>
          For project integration I have experience and usage with AWS EC2
          servers!
        </p>
      </div>
    </div>
  );

  const jenkins = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="px-3 py-2">
        <p>
          For project integration I have experience and usage with Jenkins in
          conjuction with my AWS EC2 experience!
        </p>
      </div>
    </div>
  );

  return (
    <div id="Skills" className="pt-[5rem] pb-[3rem] bg-black">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
            Skills
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Functional to <span className="text-[#55e6a5]">Technical</span>
          </h2>

          <div className="grid border-double  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem]">
            {/* Functional Skills Grid */}

            <Popover content={collaboration} trigger="hover">
              <div
                className="text-green-600 font-semibold gap-[2rem] border-double text-center border-2 border-green-400
                        border-t-[#55e6a5] bg-white hover:bg-slate-300 rounded md:rounded-lg "
              >
                Collaboration
                <div className="flex items-center align-middle justify-center">
                  <svg
                    className="h-10 w-10  text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
            </Popover>

            <Popover content={presentation} trigger="hover">
              <div
                className="text-green-600 font-semibold gap-[2rem] border-double text-center border-2 border-green-400
                        border-t-[#55e6a5] bg-white hover:bg-slate-300 rounded md:rounded-lg "
              >
                Presentation
                <div className="flex items-center align-middle justify-center">
                  <svg
                    className="h-10 w-10  text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </div>
              </div>
            </Popover>

            <Popover content={creativity} trigger="hover">
              <div
                className="text-green-600 font-semibold gap-[2rem] border-double text-center border-2 border-green-400
                        border-t-[#55e6a5] bg-white hover:bg-slate-300 rounded md:rounded-lg "
              >
                Creativity
                <div className="flex items-center align-middle justify-center">
                  <svg
                    className="h-10 w-10  text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
            </Popover>

            <Popover content={adaptability} trigger="hover">
              <div
                className="text-green-600 font-semibold gap-[2rem] border-double text-center border-2 border-green-400
                        border-t-[#55e6a5] bg-white hover:bg-slate-300 rounded md:rounded-lg "
              >
                Adaptability
                <div className="flex items-center align-middle justify-center">
                  <svg
                    className="h-10 w-10  text-green-600"
                    stroke-width="1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="6" cy="19" r="2" />{" "}
                    <circle cx="18" cy="5" r="2" />{" "}
                    <path d="M12 19h4.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h3.5" />
                  </svg>
                </div>
              </div>
            </Popover>

            <Popover content={mentorship} trigger="hover">
              <div
                className="text-green-600 font-semibold gap-[2rem] border-double text-center border-2 border-green-400
                        border-t-[#55e6a5] bg-white hover:bg-slate-300 rounded md:rounded-lg "
              >
                Mentorship
                <div className="flex items-center align-middle justify-center">
                  <svg
                    className="h-10 w-10  text-green-600"
                    stroke-width="1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="9" cy="7" r="4" />{" "}
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />{" "}
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                  </svg>
                </div>
              </div>
            </Popover>

            <Popover content={reductionism} trigger="hover">
              <div
                className="text-green-600 font-semibold gap-[2rem] border-double text-center border-2 border-green-400
                        border-t-[#55e6a5] bg-white hover:bg-slate-300 rounded md:rounded-lg "
              >
                Reductionism
                <div className="flex items-center align-middle justify-center">
                  <svg
                    className="h-10 w-10  text-green-600"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="10" x2="9.01" y2="10" />{" "}
                    <line x1="15" y1="10" x2="15.01" y2="10" />
                    <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />{" "}
                    <path d="M12 3a2 2 0 0 0 0 4" />
                  </svg>
                </div>
              </div>
            </Popover>

            <Popover content={agile} trigger="hover">
              <div
                className="text-green-600 font-semibold gap-[2rem] border-double text-center border-2 border-green-400
                        border-t-[#55e6a5] bg-white hover:bg-slate-300 rounded md:rounded-lg "
              >
                Agile
                <div className="flex items-center align-middle justify-center">
                  <svg
                    className="h-10 w-10  green-600"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="7" cy="18" r="2" />{" "}
                    <circle cx="7" cy="6" r="2" />
                    <circle cx="17" cy="6" r="2" />{" "}
                    <line x1="7" y1="8" x2="7" y2="16" />
                    <path d="M9 18h6a2 2 0 0 0 2 -2v-5" />
                    <polyline points="14 14 17 11 20 14" />
                  </svg>
                </div>
              </div>
            </Popover>

            <Popover content={learner} trigger="hover">
              <div
                className="text-green-600 font-semibold gap-[2rem] border-double text-center border-2 border-green-400
                        border-t-[#55e6a5] bg-white hover:bg-slate-300 rounded md:rounded-lg "
              >
                Learner
                <div className="flex items-center justify-center">
                  <svg
                    className="h-10 w-10  align-middle text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
              </div>
            </Popover>
          </div>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid border-double  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem]">
          <Popover content={typescript} trigger="hover">
            <div
              className="text-white font-semibold  gap-[2rem] border-double text-center border-2 border-green-400
         border-t-[green-500] bg-green-700 hover:bg-green-600 rounded md:rounded-lg "
            >
              Typescript
              <div className="flex items-center align-middle justify-center">
                <svg className="h-12 w-12" viewBox="0 0 128 128">
                  <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
                  <path
                    data-name="original"
                    fill="#007acc"
                    d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                  ></path>
                </svg>
              </div>
            </div>
          </Popover>

          <Popover content={js} trigger="hover">
            <div
              className="text-white font-semibold  gap-[2rem] border-double text-center border-2 border-green-400
         border-t-green-500 bg-green-700 hover:bg-green-600 rounded md:rounded-lg "
            >
              Js
              <div className="flex items-center align-middle justify-center">
                <svg className="h-12 w-12" viewBox="0 0 128 128">
                  <path
                    fill="#F0DB4F"
                    d="M1.408 1.408h125.184v125.185H1.408z"
                  ></path>
                  <path
                    fill="#323330"
                    d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                  ></path>
                </svg>
              </div>
            </div>
          </Popover>

          <Popover content={tailwind} trigger="hover">
            <div
              className="text-white  font-semibold gap-[2rem] border-double text-center border-2 border-green-400
         border-t-green-500 bg-green-700 hover:bg-green-600 rounded md:rounded-lg "
            >
              Tailwind
              <div className="flex items-center align-middle justify-center">
                <svg className="h-12 w-12" viewBox="0 0 128 128">
                  <path
                    d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                    fill="#38bdf8"
                  ></path>
                </svg>
              </div>
            </div>
          </Popover>

          <Popover content={css} trigger="hover">
            <div
              className="text-white  font-semibold gap-[2rem] border-double text-center border-2 border-green-400
          border-t-green-500 bg-green-700 hover:bg-green-600 rounded md:rounded-lg "
            >
              CSS
              <div className="flex items-center align-middle justify-center">
                <svg className="h-12 w-12" viewBox="0 0 128 128">
                  <path
                    fill="#1572B6"
                    d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                  ></path>
                  <path
                    fill="#33A9DC"
                    d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
                  ></path>
                  <path
                    fill="#EBEBEB"
                    d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
                  ></path>
                  <path
                    fill="#EBEBEB"
                    d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
                  ></path>
                </svg>
              </div>
            </div>
          </Popover>

          <Popover content={python} trigger="hover">
            <div
              className="text-white font-semibold gap-[2rem] border-double text-center border-2 border-green-400
         border-t-green-500 bg-green-700 hover:bg-green-600 rounded md:rounded-lg "
            >
              Python
              <div className="flex items-center align-middle justify-center">
                <svg className="h-12 w-12" viewBox="0 0 128 128">
                  <path
                    fill="#FFD845"
                    d="M40 68V57.921C40 50.948 46.218 45 53.383 45h21.102C80.359 45 84 39.96 84 34.062V13.945c0-5.726-4.306-10.026-10.04-10.981a62.801 62.801 0 00-10.743-.862c-3.611.017-7.339.324-10.374.862C43.902 4.542 42 7.848 42 13.945V22h21v3H34.891c-6.14 0-11.516 3.53-13.198 10.552-1.939 8.047-2.025 13.202 0 21.605C23.195 63.411 26.782 68 32.921 68H40zm12.054-51.372c-2.19 0-3.964-1.795-3.964-4.013 0-2.229 1.773-4.039 3.964-4.039 2.182 0 3.964 1.811 3.964 4.039 0 2.218-1.782 4.013-3.964 4.013zm54.121 18.924C104.658 29.438 101.759 25 95.612 25H87v9.062C87 41.335 81.516 48 74.485 48H53.383C47.603 48 42 52.403 42 58.193V78.31c0 5.725 5.388 9.093 10.974 10.734 6.686 1.967 12.781 2.322 20.782 0C79.074 87.504 84 84.406 84 78.31V71H63v-3h32.611c6.14 0 8.428-4.416 10.563-10.843 2.206-6.618 2.112-13.115.001-21.605zM75.814 75.625c2.19 0 3.965 1.795 3.965 4.015 0 2.227-1.774 4.037-3.965 4.037-2.182 0-3.963-1.811-3.963-4.037 0-2.22 1.781-4.015 3.963-4.015zm-40.903 36.424c0-3.757-1.072-5.686-3.214-5.791a6.03 6.03 0 00-2.495.409c-.646.231-1.082.461-1.311.692v8.968c1.371.86 2.588 1.26 3.649 1.197 2.247-.148 3.371-1.971 3.371-5.475zm2.643.157c0 1.909-.447 3.493-1.348 4.753-1.003 1.427-2.394 2.16-4.172 2.201-1.34.043-2.721-.378-4.142-1.258v8.151l-2.298-.82V107.14c.377-.462.862-.859 1.451-1.196 1.368-.798 3.031-1.207 4.987-1.228l.033.032c1.788-.022 3.166.712 4.134 2.201.902 1.366 1.355 3.117 1.355 5.257zm14.049 5.349c0 2.56-.257 4.333-.77 5.318-.516.986-1.497 1.773-2.945 2.359-1.174.463-2.444.714-3.808.757l-.38-1.448c1.386-.188 2.362-.378 2.928-.566 1.114-.377 1.878-.955 2.298-1.73.337-.631.503-1.835.503-3.618v-.599a11.809 11.809 0 01-4.941 1.068c-1.132 0-2.13-.354-2.99-1.068-.966-.777-1.449-1.764-1.449-2.958v-9.566l2.299-.787v9.63c0 1.028.332 1.82.996 2.376s1.524.822 2.578.803c1.054-.022 2.183-.431 3.382-1.228v-11.234h2.299v12.491zm8.973 1.479a9.457 9.457 0 01-.757.032c-1.3 0-2.314-.309-3.038-.93-.722-.622-1.084-1.479-1.084-2.573v-9.054h-1.574v-1.446h1.574v-3.84l2.296-.817v4.657h2.583v1.446h-2.583v8.991c0 .862.231 1.474.694 1.83.397.295 1.029.463 1.889.506v1.198zm13.917-.189h-2.298v-8.873c0-.902-.211-1.68-.631-2.329-.485-.734-1.159-1.102-2.024-1.102-1.054 0-2.372.556-3.954 1.668v10.636h-2.298V97.637l2.298-.725v9.659c1.469-1.068 3.073-1.604 4.816-1.604 1.218 0 2.203.41 2.958 1.228.757.817 1.134 1.836 1.134 3.053v9.597h-.001zm12.218-7.157c0-1.444-.274-2.636-.82-3.579-.649-1.149-1.657-1.756-3.021-1.818-2.52.146-3.778 1.951-3.778 5.412 0 1.587.262 2.912.79 3.976.674 1.356 1.685 2.024 3.033 2.002 2.531-.02 3.796-2.017 3.796-5.993zm2.518.015c0 2.055-.526 3.765-1.575 5.131-1.154 1.528-2.749 2.296-4.783 2.296-2.017 0-3.589-.768-4.723-2.296-1.028-1.366-1.542-3.076-1.542-5.131 0-1.932.556-3.556 1.668-4.879 1.174-1.403 2.718-2.107 4.627-2.107 1.909 0 3.463.704 4.66 2.107 1.111 1.323 1.668 2.947 1.668 4.879zm13.178 7.142h-2.299v-9.376c0-1.028-.31-1.831-.928-2.409-.619-.576-1.443-.855-2.472-.833-1.091.021-2.13.378-3.116 1.069v11.549h-2.299v-11.833c1.323-.963 2.54-1.592 3.652-1.886 1.049-.274 1.974-.41 2.771-.41.545 0 1.059.053 1.542.158.903.209 1.637.596 2.203 1.164.631.629.946 1.384.946 2.267v10.54z"
                  ></path>
                </svg>
              </div>
            </div>
          </Popover>

          <Popover content={go} trigger="hover">
            <div
              className="text-white font-semibold  gap-[2rem] border-double text-center border-2 border-green-400
         border-t-green-500 bg-green-700 hover:bg-green-600 rounded md:rounded-lg "
            >
              Go
              <div className="flex items-center align-middle justify-center">
                <svg className="h-12 w-12" viewBox="0 0 128 128">
                  <g fill="#00acd7" fill-rule="evenodd">
                    <path d="M11.156 54.829c-.243 0-.303-.122-.182-.303l1.273-1.637c.12-.182.424-.303.666-.303H34.55c.243 0 .303.182.182.364l-1.03 1.576c-.121.181-.424.363-.606.363zM2.004 60.404c-.242 0-.303-.12-.182-.303l1.273-1.636c.121-.182.424-.303.667-.303h27.636c.242 0 .364.182.303.364l-.485 1.454c-.06.243-.303.364-.545.364zM16.67 65.98c-.242 0-.302-.182-.181-.364l.848-1.515c.122-.182.364-.363.607-.363h12.12c.243 0 .364.181.364.424l-.12 1.454c0 .243-.243.425-.425.425zM79.58 53.738c-3.819.97-6.425 1.697-10.182 2.666-.91.243-.97.303-1.758-.606-.909-1.03-1.576-1.697-2.848-2.303-3.819-1.878-7.516-1.333-10.97.91-4.121 2.666-6.242 6.605-6.182 11.514.06 4.849 3.394 8.849 8.182 9.516 4.121.545 7.576-.91 10.303-4 .545-.667 1.03-1.394 1.636-2.243H56.064c-1.272 0-1.575-.788-1.151-1.818.788-1.879 2.242-5.03 3.09-6.606.183-.364.607-.97 1.516-.97h22.06c-.12 1.637-.12 3.273-.363 4.91-.667 4.363-2.303 8.363-4.97 11.878-4.364 5.758-10.06 9.333-17.273 10.303-5.939.788-11.454-.364-16.302-4-4.485-3.394-7.03-7.879-7.697-13.454-.788-6.606 1.151-12.546 5.151-17.758 4.303-5.636 10-9.212 16.97-10.485 5.697-1.03 11.151-.363 16.06 2.97 3.212 2.121 5.515 5.03 7.03 8.545.364.546.122.849-.606 1.03z"></path>
                    <path
                      d="M99.64 87.253c-5.515-.122-10.546-1.697-14.788-5.334-3.576-3.09-5.818-7.03-6.545-11.697-1.091-6.848.787-12.909 4.909-18.302 4.424-5.819 9.757-8.849 16.97-10.122 6.181-1.09 12-.484 17.272 3.091 4.788 3.273 7.757 7.697 8.545 13.515 1.03 8.182-1.333 14.849-6.97 20.546-4 4.06-8.909 6.606-14.545 7.757-1.636.303-3.273.364-4.848.546zm14.424-24.485c-.06-.788-.06-1.394-.182-2-1.09-6-6.606-9.394-12.363-8.06-5.637 1.272-9.273 4.848-10.606 10.545-1.091 4.727 1.212 9.515 5.575 11.454 3.334 1.455 6.667 1.273 9.879-.363 4.788-2.485 7.394-6.364 7.697-11.576z"
                      fill-rule="nonzero"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </Popover>

          <Popover content={react} trigger="hover">
            <div
              className="text-white font-semibold gap-[2rem] border-double text-center border-2 border-green-400
         border-t-green-500 bg-green-700 hover:bg-green-600 rounded md:rounded-lg "
            >
              React
              <div className="flex items-center align-middle justify-center">
                <svg className="h-12 w-12" viewBox="0 0 128 128">
                  <g fill="#61DAFB">
                    <circle cx="64" cy="64" r="11.4"></circle>
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </Popover>

          <Popover content={next} trigger="hover">
            <div
              className="text-white font-semibold  gap-[2rem] border-double text-center border-2 border-green-400
         border-t-green-500 bg-green-700 hover:bg-green-600 rounded md:rounded-lg "
            >
              Next.js
              <div className="flex items-center align-middle justify-center">
                <svg className="h-12 w-12" viewBox="0 0 128 128">
                  <path d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64 64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64 64 64 0 0 0 64 0Zm17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92-.111.096a64 64 0 0 0 .111-.096z"></path>
                </svg>
              </div>
            </div>
          </Popover>

          <Popover content={cpp} trigger="hover">
            <div
              className="text-white font-semibold  gap-[2rem] border-double text-center border-2 border-green-400
         border-t-green-500 bg-green-700 hover:bg-green-600 rounded md:rounded-lg "
            >
              C++
              <div className="flex items-center align-middle justify-center">
                <svg className="h-12 w-12" viewBox="0 0 128 128">
                  <path
                    fill="#004482"
                    d="M63.443 0c-1.782 0-3.564.39-4.916 1.172L11.594 28.27C8.89 29.828 6.68 33.66 6.68 36.78v54.197c0 1.562.55 3.298 1.441 4.841l-.002.002c.89 1.543 2.123 2.89 3.475 3.672l46.931 27.094c2.703 1.562 7.13 1.562 9.832 0h.002l46.934-27.094c1.352-.78 2.582-2.129 3.473-3.672.89-1.543 1.441-3.28 1.441-4.843V36.779c0-1.557-.55-3.295-1.441-4.838v-.002c-.891-1.545-2.121-2.893-3.473-3.67L68.359 1.173C67.008.39 65.226 0 63.443 0zm.002 26.033c13.465 0 26.02 7.246 32.77 18.91l-16.38 9.479c-3.372-5.836-9.66-9.467-16.39-9.467-10.432 0-18.922 8.49-18.922 18.924S53.013 82.8 63.445 82.8c6.735 0 13.015-3.625 16.395-9.465l16.375 9.477c-6.746 11.662-19.305 18.91-32.77 18.91-20.867 0-37.843-16.977-37.843-37.844s16.976-37.844 37.843-37.844v-.002zM92.881 57.57h4.201v4.207h4.203v4.203h-4.203v4.207h-4.201V65.98h-4.207v-4.203h4.207V57.57zm15.765 0h4.208v4.207h4.203v4.203h-4.203v4.207h-4.208V65.98h-4.205v-4.203h4.205V57.57z"
                  ></path>
                </svg>
              </div>
            </div>
          </Popover>

          <Popover content={arduino} trigger="hover">
            <div
              className="text-white font-semibold gap-[2rem] border-double text-center border-2 border-green-400
         border-t-green-500 bg-green-700 hover:bg-green-600 rounded md:rounded-lg "
            >
              Arduino
              <div className="flex items-center align-middle justify-center">
                <svg className="h-12 w-12" viewBox="0 0 128 128">
                  <g fill="#00979c" fill-rule="evenodd">
                    <path d="M.3 66.5v-9.6c.2-.1.2-.3.2-.5 3-13.1 11.2-21 24.2-24.1 1.1-.3 2.3-.2 3.4-.6h6.4c.1.2.4.1.6.1 6.4.7 12.2 3 17.3 7 4.4 3.3 7.8 7.5 10.9 12 .4.6.6.6 1 0 1.8-2.6 3.7-5.1 5.9-7.4 5.3-5.7 11.7-9.7 19.5-11.1 1.1-.3 2.4-.2 3.5-.6h6.2c.1.2.3.1.5.1 1.9.2 3.7.6 5.5 1.1 13.4 3.9 22.9 16.2 22.1 30.1-.6 11.7-6.5 20.1-16.8 25.4-5.1 2.8-10.7 3.5-16.5 3.4-7.6-.1-14.2-2.7-19.9-7.7-4-3.5-7.1-7.7-10-12.1-.4-.6-.6-.5-1 .1-1.8 2.7-3.7 5.4-5.9 8-3.9 4.4-8.4 8-14 9.9-6.9 2.4-13.9 2.5-20.9.6-10.1-2.9-17-9.3-20.8-19.1-.6-1.6-.9-3.4-1.4-5zm31.8 14.7c5.7.2 10.6-1.7 14.8-5.6 4.3-4 7.4-9 10.5-13.9.1-.3.1-.5-.1-.8-2.6-4.1-5.3-8.2-8.9-11.6-6.9-6.6-15-8.8-24.1-5.9-7.5 2.5-12.3 7.8-13.4 15.8-1.1 7.5 1.8 13.5 7.8 18 4 2.9 8.5 4.1 13.4 4zm63.4 0c2.2 0 4.4-.1 6.5-.7 7.9-2.4 13.1-7.3 14.6-15.5 1.5-8.1-1.6-14.6-8.4-19.2-7.5-5.2-18.4-4.7-26 1-5.1 3.8-8.5 8.9-11.9 14.2-.2.3-.1.5 0 .8 2.7 4.3 5.4 8.6 8.9 12.3 4.4 4.7 9.7 7.4 16.3 7.1zm0 0"></path>
                    <path d="M32 58.5c3.2 0 6.5.1 9.7 0 .8 0 .9.2.9 1-.1.9-.1 1.8 0 2.7.1.8-.1 1-1 1H28.8c-2.2 0-4.4-.1-6.6 0-.7 0-.9-.2-.9-1 .1-.9.1-1.8 0-2.8 0-.7.2-.9.9-.9 3.2.1 6.5 0 9.8 0zm63-6.4c.8 0 1.6.1 2.3 0 .5 0 .7.2.7.7-.1 1.4 0 2.8-.1 4.2 0 .7.2.9.9.9 1.3-.1 2.7 0 4.1-.1.6 0 .8.1.8.8v4.6c0 .5-.2.7-.7.7-1.4-.1-2.8 0-4.3-.1-.6 0-.8.2-.8.8.1 1.4 0 2.8.1 4.2 0 .6-.2.9-.8.9-1.5-.1-3-.1-4.5 0-.6 0-.8-.2-.8-.8.1-1.5 0-2.9.1-4.4 0-.5-.2-.7-.7-.7-1.4.1-2.8 0-4.2.1-.8 0-.9-.3-.9-.9 0-1.4.1-2.8 0-4.2-.1-.8.3-1 1-1 1.4.1 2.7 0 4.1.1.5 0 .7-.2.7-.7-.1-1.4 0-2.9-.1-4.3 0-.6.2-.8.8-.8.8.1 1.5 0 2.3 0zm29.852-27.623c-.133.199-.18.265-.223.332-.242.363-.055 1.097-.664 1.086-.54-.012-.403-.684-.594-1.051-.05-.098-.11-.188-.277-.461 0 .504.008.789 0 1.078-.008.195.035.441-.274.457-.312.016-.293-.234-.297-.43-.007-.68-.007-1.355-.003-2.031 0-.23-.036-.496.324-.504.27-.004.504-.015.617.336.144.43.195.91.527 1.324.317-.402.371-.867.492-1.293.102-.347.317-.37.598-.37.356.003.34.253.344.488.004.68.004 1.355-.004 2.035-.004.191.023.445-.281.449-.305 0-.282-.242-.285-.442-.008-.289 0-.574 0-1.003zm-3.712-1.532c.087 0 .18-.015.262 0 .325.063.828-.187.934.2.144.543-.426.27-.668.386-.242.117-.195.332-.2.528-.011.468-.007.937-.007 1.406 0 .258-.05.473-.383.46-.305-.01-.293-.234-.293-.437a36.975 36.975 0 01-.004-1.316c.012-.375.016-.727-.523-.676-.188.016-.352-.039-.352-.277 0-.328.254-.262.442-.27.265-.012.527-.004.793-.004zm0 0"></path>
                  </g>
                </svg>
              </div>
            </div>
          </Popover>

          <Popover content={aws} trigger="hover">
            <div
              className="text-white font-semibold gap-[2rem] border-double text-center border-2 border-green-400
            border-t-green-500 bg-green-700 hover:bg-green-600 rounded md:rounded-lg "
            >
              AWS
              <div className="flex items-center align-middle justify-center">
                <svg className="h-12 w-12" viewBox="0 0 128 128">
                  <path
                    fill="#252f3e"
                    d="M36.379 53.64c0 1.56.168 2.825.465 3.75.336.926.758 1.938 1.347 3.032.207.336.293.672.293.969 0 .418-.254.84-.8 1.261l-2.653 1.77c-.379.25-.758.379-1.093.379-.422 0-.844-.211-1.266-.59a13.28 13.28 0 0 1-1.516-1.98 34.153 34.153 0 0 1-1.304-2.485c-3.282 3.875-7.41 5.813-12.38 5.813-3.535 0-6.355-1.012-8.421-3.032-2.063-2.023-3.114-4.718-3.114-8.086 0-3.578 1.262-6.484 3.833-8.671 2.566-2.192 5.976-3.286 10.316-3.286 1.43 0 2.902.125 4.46.336 1.56.211 3.161.547 4.845.926v-3.074c0-3.2-.676-5.43-1.98-6.734C26.061 32.633 23.788 32 20.546 32c-1.473 0-2.988.168-4.547.547a33.416 33.416 0 0 0-4.547 1.433c-.676.293-1.18.461-1.473.547-.296.082-.507.125-.675.125-.59 0-.883-.422-.883-1.304v-2.063c0-.676.082-1.18.293-1.476.21-.293.59-.586 1.18-.883 1.472-.758 3.242-1.39 5.304-1.895 2.063-.547 4.254-.8 6.57-.8 5.008 0 8.672 1.136 11.032 3.41 2.316 2.273 3.492 5.726 3.492 10.359v13.64Zm-17.094 6.403c1.387 0 2.82-.254 4.336-.758 1.516-.508 2.863-1.433 4-2.695.672-.8 1.18-1.684 1.43-2.695.254-1.012.422-2.23.422-3.665v-1.765a34.401 34.401 0 0 0-3.871-.719 31.816 31.816 0 0 0-3.961-.25c-2.82 0-4.883.547-6.274 1.684-1.387 1.136-2.062 2.734-2.062 4.84 0 1.98.504 3.453 1.558 4.464 1.012 1.051 2.485 1.559 4.422 1.559Zm33.809 4.547c-.758 0-1.262-.125-1.598-.422-.34-.254-.633-.84-.887-1.64L40.715 29.98c-.25-.843-.38-1.39-.38-1.687 0-.672.337-1.05 1.013-1.05h4.125c.8 0 1.347.124 1.644.421.336.25.59.84.84 1.64l7.074 27.876 6.57-27.875c.208-.84.462-1.39.797-1.64.34-.255.93-.423 1.688-.423h3.367c.8 0 1.348.125 1.684.422.336.25.633.84.8 1.64l6.653 28.212 7.285-28.211c.25-.84.547-1.39.84-1.64.336-.255.887-.423 1.644-.423h3.914c.676 0 1.055.336 1.055 1.051 0 .21-.043.422-.086.676-.043.254-.125.59-.293 1.05L80.801 62.57c-.254.84-.547 1.387-.887 1.64-.336.255-.883.423-1.598.423h-3.62c-.801 0-1.348-.13-1.684-.422-.34-.297-.633-.844-.801-1.684l-6.527-27.16-6.485 27.117c-.21.844-.46 1.391-.8 1.684-.337.297-.926.422-1.684.422Zm54.105 1.137c-2.187 0-4.379-.254-6.484-.758-2.106-.504-3.746-1.055-4.84-1.684-.676-.379-1.137-.8-1.305-1.18a2.919 2.919 0 0 1-.254-1.18v-2.148c0-.882.336-1.304.97-1.304.25 0 .503.043.757.129.25.082.629.25 1.05.418a23.102 23.102 0 0 0 4.634 1.476c1.683.336 3.324.504 5.011.504 2.653 0 4.715-.465 6.145-1.39 1.433-.926 2.191-2.274 2.191-4 0-1.18-.379-2.145-1.136-2.946-.758-.8-2.192-1.516-4.254-2.191l-6.106-1.895c-3.074-.969-5.348-2.398-6.734-4.293-1.39-1.855-2.106-3.918-2.106-6.105 0-1.77.38-3.328 1.137-4.676a10.829 10.829 0 0 1 3.031-3.453c1.262-.965 2.696-1.684 4.38-2.188 1.683-.504 3.452-.715 5.304-.715.926 0 1.894.043 2.82.168.969.125 1.852.293 2.738.461.84.211 1.641.422 2.399.676.758.254 1.348.504 1.77.758.59.336 1.011.672 1.261 1.05.254.34.379.802.379 1.391v1.98c0 .884-.336 1.348-.969 1.348-.336 0-.883-.171-1.597-.507-2.403-1.094-5.098-1.641-8.086-1.641-2.399 0-4.293.379-5.598 1.18-1.309.797-1.98 2.02-1.98 3.746 0 1.18.421 2.191 1.261 2.988.844.8 2.403 1.602 4.633 2.316l5.98 1.895c3.032.969 5.22 2.316 6.524 4.043 1.305 1.727 1.938 3.707 1.938 5.895 0 1.812-.38 3.453-1.094 4.882-.758 1.434-1.77 2.696-3.074 3.707-1.305 1.051-2.864 1.809-4.672 2.36-1.895.586-3.875.883-6.024.883Zm0 0"
                  ></path>{" "}
                  <path
                    fill="#f90"
                    d="M118 73.348c-4.432.063-9.664 1.052-13.621 3.832-1.223.883-1.012 2.062.336 1.894 4.508-.547 14.44-1.726 16.21.547 1.77 2.23-1.976 11.62-3.663 15.79-.504 1.26.59 1.769 1.726.8 7.41-6.231 9.348-19.242 7.832-21.137-.757-.925-4.388-1.79-8.82-1.726zM1.63 75.859c-.927.116-1.347 1.236-.368 2.121 16.508 14.902 38.359 23.872 62.613 23.872 17.305 0 37.43-5.43 51.281-15.66 2.273-1.688.297-4.254-2.02-3.204-15.534 6.57-32.421 9.77-47.788 9.77-22.778 0-44.8-6.273-62.653-16.633-.39-.231-.755-.304-1.064-.266z"
                  ></path>
                </svg>
              </div>
            </div>
          </Popover>

          <Popover content={jenkins} trigger="hover">
            <div
              className="text-white font-semibold gap-[2rem] border-double text-center border-2 border-green-400
            border-t-green-500 bg-green-700 hover:bg-green-600 rounded md:rounded-lg "
            >
              Jenkins
              <div className="flex items-center align-middle justify-center">
                <svg className="h-12 w-12" viewBox="0 0 128 128">
                  <path
                    fill="#d33833"
                    d="M108.893 61.68c0 25.36-20.099 45.918-44.892 45.918-24.794 0-44.893-20.558-44.893-45.918s20.1-45.92 44.893-45.92 44.892 20.56 44.892 45.92"
                  ></path>
                  <path
                    fill="#ef3d3a"
                    d="M20.938 73.052S17.688 25.167 61.81 23.8l-3.078-5.13-23.943 8.037-6.84 7.867-5.986 11.459-3.42 13.339 1.025 8.893"
                  ></path>
                  <path
                    fill="#231f20"
                    d="M33.253 30.355c-7.876 8.06-12.75 19.186-12.75 31.496 0 12.307 4.874 23.436 12.75 31.494 7.88 8.057 18.74 13.03 30.747 13.03 12.007 0 22.867-4.973 30.747-13.03 7.876-8.058 12.751-19.187 12.751-31.494 0-12.31-4.875-23.437-12.751-31.496C86.867 22.3 76.007 17.327 64 17.326c-12.006.001-22.867 4.973-30.747 13.03zM31.26 95.294c-8.37-8.561-13.546-20.392-13.546-33.443 0-13.053 5.176-24.883 13.546-33.444 8.37-8.563 19.954-13.87 32.74-13.869 12.788-.002 24.374 5.306 32.741 13.869 8.372 8.561 13.548 20.392 13.547 33.444 0 13.05-5.175 24.882-13.547 33.443-8.367 8.562-19.953 13.87-32.74 13.87-12.787 0-24.372-5.308-32.74-13.87"
                  ></path>
                  <path
                    fill="#f0d6b7"
                    d="m82.898 61.934-6.841 1.026-9.235 1.026-5.986.171-5.815-.17-4.446-1.369-3.934-4.275-3.078-8.722-.684-1.881-4.105-1.368-2.394-3.934-1.71-5.644 1.881-4.96 4.446-1.538 3.592 1.71 1.71 3.762 2.053-.342.683-.855-.683-3.933-.172-4.96 1.026-6.84-.04-3.908 3.119-4.985 5.472-3.934 9.578-4.104 10.603 1.539 9.235 6.67 4.276 6.84 2.736 4.96.684 12.313-2.053 10.604-3.762 9.405-3.591 4.96"
                  ></path>
                  <path
                    fill="#335061"
                    d="m88.027 56.975-4.103 4.105v15.904l-3.58 14.66-1.721.047 1.367 16.418 6.498-.855L84.95 91.52l-2.902.079 7.863-.422s3.932-9.919 3.932-10.432c0-.513 3.422-14.365 3.422-14.365l-7.698-8.037-1.539-1.37zm-41.215 2.564-4.275 1.711-13.682 9.406.856 2.737 3.934 11.628 1.709 19.327 1.197 2.05 17.101 5.817 1.028-1.2-2.053-14.365v-4.103l24.455-1.027 1.88-1.026-14.876-7.012 2.736-5.3-3.933 1.367-1.54-1.881-2.052-8.893-1.711-.513-3.762-1.198-3.25-2.906-3.761-4.619z"
                  ></path>
                  <path
                    fill="#6d6b6d"
                    d="m36.551 31.835 4.446-1.54 3.592 1.711 1.71 3.762 2.053-.342.513-2.052-1.026-3.933 1.026-9.407-.856-5.13 3.079-3.592 6.67-5.301-1.882-2.565-9.406 4.617-3.933 3.079-2.224 4.788-3.42 4.617-1.026 5.473.684 5.815"
                  ></path>
                  <path
                    fill="#dcd9d8"
                    d="M59.445 4.021c-1.172-.012-2.543.108-2.543.108L45.787 8.406l-4.277 4.276-1.881 3.42 3.934-.342s2.565-6.328 12.826-9.406c6.413-1.924 5.01-2.312 3.056-2.333zM48.01 14.904l-9.406 2.223-2.737 8.893.684 5.814 1.88-1.195s-3.591-11.974 10.09-13.684l-.511-2.05z"
                  ></path>
                  <path
                    fill="#f7e4cd"
                    d="M69.986.475a11.318 11.318 0 0 0-3.85.748c-10.26 3.933-17.785 11.115-17.615 15.732.292 7.864.172 7.87.172 7.87S51.601 9.774 66.31 6.866c12.108-2.393 18.468.512 20.863 3.248 0 0-8.25-9.82-17.186-9.64zm18.328 11.35c-.545-.003-4.913.108-5.074 4.277 0 0 0 .683.342 1.367 0 0 3.934-4.447 6.328-2.053l-1.539-3.59s-.02-.002-.057-.002zm-25.185 2.01c-.84.02-1.876.371-3.149 1.24-3.762 2.565-3.42 6.157-2.736 6.841.684.684.499 2.06 1.02 1.115.52-.945.349-4.022 2.23-4.877 1.881-.855 4.966-1.812 6.16-.222 0 0-.522-4.166-3.525-4.096zm26.437 10.476s-2.818.594-3.078 3.078c-.26 2.483 3.079.512 3.592.341l-.514-3.42zm-20.693.171s-3.762.513-3.762 2.907 4.276 2.223 5.473 1.197l-1.711-4.104zM38.432 30.64 34.5 34.742l.684 5.131 2.05 5.3 2.225.686c-3.25-3.933-1.711-6.671-1.027-10.433.683-3.763 7.183.172 7.183.172l-.172-2.567-2.564-2.05-4.447-.342zm38.609 7.847c-1.126-.05-1.556 3.635-1.648 4.586.31-.92 3.171-2.77 3.171-2.77s0-1.396-1.396-1.794a.549.549 0 0 0-.127-.022zm-1.648 4.586a.394.394 0 0 0-.02.221s.006-.08.02-.22zm-29.248 1.301-2.24 2.17.513 7.525 5.473 8.551s6.143 1.386 5.472.856c-7.353-5.815-7.866-16.59-8.037-17.788-.17-1.196-1.181-1.314-1.181-1.314zm19.244 2.549c-.675.01-1.122.228-1.248.396-.427.57.457 3.672.457 3.672l.855.172c-.17-3.421 1.881-3.764 1.881-3.764-.758-.364-1.42-.484-1.945-.476z"
                  ></path>
                  <path
                    fill="#49728b"
                    d="m45.615 59.37-16.76 11.286 1.881 5.303 4.448 19.152.17 10.092 2.394.854c3.42-8.21-3.248-34.717-3.248-34.717l16.074-7.182-4.959-4.789zm6.614 19.448-.458 1.073s-.341 3.078-.341 3.933c0 .856.341 8.04.341 8.04h2.737V81.601l-2.28-2.784zm.056 14.584-7.695.342 2.222 1.54 5.473.855v-2.737zm35.742-36.427-3.248 3.591L96.75 69.46l.342-4.104-9.065-8.38zm-3.42 33.52-5.984 1.196.854 4.79c2.223 1.026 5.986-1.711 5.986-1.711l-.856-4.276z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M50.574 62.62v1.538l2.174 2.395 6.84 3.078.172-5.129-4.739-.516-4.447-1.367zm50.059 24.284-5.473 1.711-5.25 2.563-2.789-.51-2.172.853 1.832 14.368 6.668-1.883 12.656-.684 1.881-5.814-3.42-10.09-3.933-.514zm-22.01 4.787-9.97.002-16.026.854.291 7.869 1.762 10.6 3.54 14.369 7.866 1.709 12.998-1.026.17-2.566-1.54-13.852.909-17.959zm1.317-1.366-3.763-9.577-3.934-5.644s.855-2.394 2.053-2.394h3.933l3.762 1.368-.341 6.328-1.71 9.92"
                  ></path>
                  <path
                    fill="#dcd9d8"
                    d="m52.115 65.014-.513.685 2.908 2.051 4.787 1.025-.17-2.05c-1.71.513-7.012-1.711-7.012-1.711zm23.77 7.353-3.932.512 6.67 15.734 1.367.172.684-1.71s-4.79-9.236-4.79-10.604c0 0 .856-2.052 2.053-1.54 1.198.514 3.764 1.882 3.764 1.882v-3.249l-5.816-1.197zm16.248 17.957-2.223.854 1.881 9.406c-.684-.171-5.13 1.883-5.13 1.883l.51 2.736 1.884-.685 5.984-.854 1.711 2.223 5.13.17 3.079-.684 2.736-4.103-.172-3.08-1.88-5.473c.513 4.104-1.54 8.039-1.54 8.039-.855 0-10.431-.514-10.431-.514 0-1.026-1.54-9.918-1.54-9.918zm-13.17.17-2.565 1.027s-.854 17.787 1.711 30.442c0 0-5.13 3.249-12.656 4.103l14.365-.513 1.711-1.026-2.052-28.047-.514-5.986zm4.47 18.297c-.736.004-1.83.526-2.603.475-.113 2.701.266 7.033.393 9.867 1.796.002 2.565-.392 3.906-.844.151-3.335-1.057-6.422-1.404-9.467a1.105 1.105 0 0 0-.291-.031z"
                  ></path>
                  <path
                    fill="#d33833"
                    d="M84.777 63.818c-2.192.102-5.148 2.897-6.525 3.387.178.512.47.917.492 1.57.965-.238 2.14-.075 2.977.336-.968.108-2.038.102-2.678.563-.235.677.055 1.6-.102 2.54 2.296.648 4.919.994 7.82 1.079.566-.733.758-2.133.69-3.518-.08-1.67-.519-5.104-1.55-5.705-.34-.197-.718-.27-1.124-.252zm-22.535.748c-2.324.05-2.082 4.108-1.969 6.592.095 2.098 1.188 4.318 1.66 5.713.224.65.274 1.342.83 1.47.984.23 4.23-1.067 5.155-1.571 1.955-1.066 3.473-2.76 5.133-3.897l.062-1.658c-.998-.498-2.15-.852-3.617-.916.995-.5 2.457-.493 3.363-1.088l.026-.662c-1.654-.127-2.285-.864-3.375-1.461-1.784-.974-4.464-2.037-6.768-2.477a2.4 2.4 0 0 0-.5-.045zm13.43 3.457c-.442.004-.969.171-1.57.573-.114 1.259.18 1.67.433 3.115 3.493 1.093 3.525-3.704 1.137-3.688z"
                  ></path>
                  <path
                    fill="#ef3d3a"
                    d="m84.557 62.621-6.498 3.762-.344 1.88v3.762l2.394.856s-1.197-1.71-.341-2.223c.855-.513 1.711 0 2.224-.855.513-.856 0-1.369.17-2.395.171-1.026 1.026-1.196 1.881-1.367.855-.17 3.25-.513 3.592.342l-1.026-3.078zm-21.536 1.03c-.847-.018-1.619.122-2.185.507-4.021 2.735-.78 9.056 1.19 12.774a551.56 551.56 0 0 0-.538-6.409c-.362-3.98.957-3.285 4.408-3.285.528 0 3.245.628 3.44 1.026.933 1.905-1.56 1.481 1.074 2.918 2.224 1.212 6.152-.737 5.254-3.432-.503-.6-2.62-.187-3.379-.58l-4.008-2.078c-1.168-.607-3.392-1.403-5.256-1.442Zm-.996 13.28c.042.532.086 1.063.127 1.594l.612-.183c-.204-.405-.46-.883-.739-1.41z"
                  ></path>
                  <path
                    fill="#231f20"
                    d="M67.565.006c-3.59.068-7.101.665-10.027 1.742-2.175.8-4.282 1.516-6.192 2.638-5.111 3-10.537 5.008-12.052 11.047-3.734 1.672-4.86 6.451-4.672 11.997.036 1.081.623 2.432.42 3.449-.104.516-.804 1.177-.944 1.513-1.79 4.267-.355 9.876 1.713 12.909 1.25 1.832 3.32 3.457 6.05 3.888.109 1.635.502 3.042 1.257 4.699.478 1.048 2.263 2.932 1.606 4.269-.33.674-3.237 2.137-4.201 2.716-3.255 1.952-5.614 3.149-8.619 5.312-1.944 1.4-4.985 1.58-4.505 4.808.323 2.178 1.563 4.878 2.272 7.062.768 2.357 1.868 4.516 2.5 6.962 1.405 5.451 1.698 10.587 2.04 15.911.134 2.085-.088 4.291.453 5.442.558 1.19 2.626 1.57 4.12 2.264 4.315 1.995 8.893 5.042 14.552 4.437 1.349 4.536 2.624 9.367 4.243 13.34 5.803 2.086 14.964 1.76 20.997 1.035 1.834-.222 3.769-1.127 4.2-2.717-.129-.98-.272-1.95-.21-3.109 1.886-.39 4.453-.712 4.868-2.8.582-2.928-1.849-7.123-1.038-10.336 1.092-.354 2.258-.631 2.084-2.355 1.84-.958 4.023-1.172 6.353-1.082.3.58.727 1.138 1.111 1.457 3.264.656 6.425.71 9.135-.174 3.067-1.002 4.53-7.275 3.829-10.26-.498-2.115-1.624-5.58-2.584-7.628-2.601-5.56-10.353-2.07-14.502-.008 2.013-5.295 3.744-10.785 5.52-16.725.53-1.78 1.578-4.303 1.343-6.147-.22-1.734-2.924-3.556-4.347-4.93-.791-.762-4.479-3.562-4.693-4.61-.207-1.014 1.504-3.311 2.054-4.46.79-1.644 1.356-3.656 1.745-5.025 2.9-10.196 3.195-24.204-.951-32.586-1.57-3.175-5.96-7.56-8.705-9.637C79.74 1.254 73.546-.106 67.565.006Zm.478 2.84C72.89 2.799 78.28 4.509 81.93 6.568c3.05 1.72 5.3 5.048 7.446 7.817-3.009-.893-5.57.642-5.103 3.124 2.519-2.309 6.822-.025 8.095 2.528 1.217 2.44 1.209 6.057 1.396 9.685.453 8.798-1.61 17.875-6.031 24.234-1.182 1.698-2.174 3.554-3.836 4.723-4.006 2.813-10.095 5.363-15.309 3.614-6.89-2.312-10.02-6.903-13.81-12.16.103 2.888 2.134 5.258 4.14 7.467 1.745 1.925 3.851 4.1 6.117 4.998-1.89-.444-4.792-.583-5.58 1.114-4.41-.293-8.508-.744-10.594-3.733-1.644-2.356-3.314-6.363-4.063-9.458-.153-.636-.415-1.99-.351-2.337.246-1.343 2.638-1.933 1.697-3.81-1.736-.016-2.127 1.58-3.72 1.738-4.125.408-7.035-5.467-6.848-9.012.159-3.014 2.707-5.898 6.192-5.517 2.463.27 3.3 2.958 3.778 5.35 1.42.076 3.471-.061 4.143-1.169-.097-2.703-1.352-4.871-1.266-7.355.162-4.668 2.705-8.88.743-13.478 2.1-4.764 8.261-8.524 12.818-10.797 1.765-.88 3.856-1.264 6.06-1.286zM55.505 5.192c.198.032.38.186.556.374-.03.811-.83.794-1.37 1.054-.84 1.033-2.068 1.516-3.09 2.648-1.049 1.16-2.222 4.276-3.612 4.62-.697.174-1.493-.12-2.1-.08-1.605.101-2.735.923-4.363 1.159 2.102-4.595 8.659-8.313 13.774-9.762a.468.468 0 0 1 .205-.013zm8.74 9.973c-2.637.003-5.64 2.822-6.423 4.973-.318.874-.82 2.59.441 2.895 1.413-3.149 3.729-6.185 8.39-5.1.895-1.471-.705-2.552-1.887-2.73a3.477 3.477 0 0 0-.522-.038zm-16.656.48c1.802 4.586-1.293 10.036-.14 15.051.353 1.536 1.574 3.92-.376 3.972.051-4.37-5.37-7.143-9.455-4.574-.273-3.314-.746-7.973 1.514-10.459 2.085-2.296 4.959-3.725 8.457-3.99zm41.776 7.597c-.149 2.517.786 4.032 1.435 5.812-1.122.706-3.305.266-4.57.819-.09 3.723 5.76 1.888 6.65-.185-1.33-1.932-2.241-4.25-3.295-6.437l-.22-.01zm-20.325.057c-.692 1.964 1.188 5.298 2.242 6.984-1.373 1.333-3.842.226-5.679.14-1.753 2.769 3.423 3.29 5.644 2.634.608-.179 1.66-1.09 1.805-1.5.617-1.733-.627-2.493-1.267-3.117-1.42-1.384-1.746-3.31-2.745-5.141zm10.549 1.81c-.134-.018-.295.03-.488.17-.125 4.616 3.305 8.437 5.863 11.52 1.25 1.505 2.756 2.365 1.369 4.703-2.236.85-5.855 3.285-8.964 2.753-1.65-.282-1.278-2.155-1.87-3.173-1.138 1.497-.692 3.762.48 4.78 5.479.542 9.208-1.794 12.552-3.943-.133-.842 1.012-2.36.694-3.626-.11-.436-1.102-1.068-1.704-1.727-2.453-2.675-5.814-6.672-7.15-9.798-.12-.28-.201-1.583-.782-1.66zm-38.98 8.635c-1.267-.02-2.415.815-2.686 2.783.562-.368 1.015-1.415 2.028-.917-.89 1.737-.676 5.12.535 6.22-.007-2.062-.328-5.587 1.43-5.48 1.231.074 1.48 2.71 2.528 3.308.723-3.478-1.722-5.882-3.835-5.914zm50.051 10.36c-2.673 1.22-4.83 2.997-8.322 3.332-.169.577-.097 2.033-.004 2.99 4.567-.095 6.77-3.358 8.326-6.321zm-21.884 1.921c1.335 3.573 7.353 4.833 12.443 4.579-.008-1.058-.003-2.13-.215-2.998-3.96.116-9.315-.049-12.228-1.58zm-.553 2.858c-2.573.003-.403 1.434.033 1.994.902 1.16 1.96 3.139 3.608 4.015 2.598 1.38 7.758.801 9.63.04.692-.28 1.25-1.057 1.507-1.713-5.84.14-12.763.722-14.778-4.336zm19.436 9.83c2 1.611 3.208 3.127 5.126 4.85 1.04.933 3.088 2.051 3.295 3.56.115.842-.401 2.905-.591 3.852-.84 4.154-2.73 9.642-4.53 13.995-.654 1.582-1.28 3.56-2.143 3.902-2.364.936-5.233-.091-7.242 1.16 2.7-4.685 5.64-9.111 8.286-13.852-.403-.94-1.391-1.341-1.678-2.388 1.858-3.509 1.004-14.403-3.738-12.103.663-.974 2.404-1.778 3.215-2.976zm-41.724 2.48c.431-.17 3.577 3.923 4.042 4.255 2.55 1.81 5.716 3.24 8.677 4.653.181 1.359.6 3.12 1.338 5.476.813 2.602 1.484 6.274 4.922 4.398-.327 1.486-2.237 2.408-1.71 4.141.33 1.087 3.94 2.43 5.084 3.076 2.111 1.19 4.037 1.848 5.659 2.544-7.37.202-14.291.802-21.102 1.729-.816-1.264-.487-3.212-.573-5.225-.094-2.186.815-7.114-.044-7.42-.971-.345-1.153 1.623-1.188 2.057-.182 2.308 1.099 7.195-.164 9.958-1.382-.391-2.063-1.43-3.358-1.902-.508 1.6 1.052 1.677.892 2.693-.212 1.343-2.757.22-2.743 2.217 1.657.266 4.199-.515 5.97.232.463 5.433 1.207 10.581 2.022 16.352-7.048-.366-11.61-3.868-16.805-6.297-.323-11.49-2.154-23.41-6.688-33.14 4.756-3.67 10.078-7.552 15.77-9.796zm39.082 2.626c.316.015.613.094.884.252 1.032.602 1.471 4.036 1.551 5.706.067 1.385-.126 2.783-.69 3.517-2.902-.085-5.524-.43-7.82-1.078.157-.94-.135-1.865.1-2.543.639-.46 1.711-.452 2.678-.56-.836-.412-2.01-.575-2.975-.337-.023-.654-.316-1.058-.493-1.57 1.427-.509 4.554-3.496 6.765-3.387zm-5.2.127c-1.218.794-2.255 1.787-3.424 2.635-2.593.129-4.008-.179-5.913-1.668.03-.12.222-.066.23-.213 2.775 1.237 6.304-.504 9.106-.754zm-27.347.049c1.447 1.005 4.247.757 6.378 1.131.11.683-.442 1.58-.432 2.531-1.793-.11-7.427-2.16-5.946-3.662zm9.772.573c.155-.004.321.011.5.045 2.304.44 4.984 1.502 6.768 2.477 1.09.596 1.721 1.332 3.375 1.46-.007.22-.017.44-.025.662-.906.595-2.369.588-3.363 1.088 1.466.064 2.62.417 3.618.915l-.065 1.659c-1.661 1.137-3.178 2.83-5.133 3.896-.925.504-4.17 1.802-5.153 1.572-.557-.129-.607-.82-.83-1.47-.473-1.395-1.564-3.614-1.66-5.712-.113-2.485-.356-6.545 1.968-6.592zm13.294 3.463c.137-.011.267-.007.39.011 2.126.313 1.972 4.722-1.392 3.67-.253-1.444-.546-1.856-.433-3.115.542-.361 1.022-.533 1.435-.566zm1.936 5.014c1.218.13 2.182 1.81 3.92 1.7-.279 4.532-.133 9.08-1.398 13.232-2.357-4.322-3.744-9.54-6.795-13.217.322-.342.61-.721.926-1.071 1.382.578 2.284-.758 3.347-.644zm7.008 1.442c1.678-.013 3.052 1.084 3.807 2.297-2.364 4.05-4.626 8.208-7.43 11.78 1.175-3.458 1.679-9.245 1.857-13.657a4.222 4.222 0 0 1 1.766-.42zM71.71 76.03c2.8 3.554 4.504 8.125 6.38 12.537-4.432-1.336-8.96-3.504-12.844-5.702.762-3.304 3.75-5.016 6.464-6.835zm29.511 11.728c1.217.03 2.426 1.018 2.955 1.819.956 1.444 1.849 5.695 2.35 7.952.747 3.359-.932 6.629-3.603 7.277v.001c-1.944.472-4.926.596-6.199-.019 1.558-.851 3.899-.856 5.702-1.44-2.583-1.112-6.405-.064-9.511-.258-.375-3.835-.658-7.993-1.567-11.02 1.813-1.927 6.193-2.39 8.68-3.981a2.077 2.077 0 0 1 1.193-.331zm-.211 3.578c-3.183.094-5.67.937-7.09 2.938 2.583.165 4.443-2.408 7.09-2.938zm-12.54.785c.225.01.447.035.66.083 1.692 2.91 2.056 7.749 2 11.261-1.055.204-1.74.808-3.02.768-.327-4.001-1.256-8.208-1.638-12.02.61-.012 1.32-.12 1.997-.092zm-19.603.043c3.34-.054 6.58.142 9.385.726.685 4.453.43 8.845.93 13.21.662 5.808.166 12.434 1.3 17.876-6.173 1.913-14.59 1.728-21.574-.392-3.147-9.643-4.863-18.796-6.047-29.685 4.587-.858 10.437-1.645 16.006-1.735zm14.824.384c1.103 3.987 1.037 9.06 1.579 13.567-1.668.366-2.888.545-4.683.815-.357-4.682-.63-9.295-.566-13.971 1.272-.426 2.394-.4 3.67-.411zm14.486 2.296c-1.26.016-2.394.29-2.88 1.032 2.19.18 4.722-.17 6.88-.398-.984-.34-2.572-.653-4-.634zm-.361 3.24c-1.128.014-2.123.228-2.634.777 2.304.193 5.318.241 7.743.189-.983-.458-3.23-.99-5.11-.966zM83.098 108.82c.236-.037.45-.045.627.002.348 3.045 1.555 6.131 1.404 9.466-1.34.452-2.11.848-3.907.845-.126-2.834-.506-7.166-.392-9.868.662.044 1.561-.334 2.268-.445z"
                  ></path>
                  <path
                    fill="#81b0c4"
                    d="M84.48 74.486a4.225 4.225 0 0 0-1.767.42c-.178 4.412-.68 10.199-1.856 13.656 2.805-3.571 5.066-7.73 7.43-11.779-.756-1.213-2.129-2.31-3.807-2.297zM71.71 76.03c-2.714 1.82-5.7 3.532-6.463 6.836 3.884 2.198 8.412 4.365 12.844 5.701-1.876-4.41-3.58-8.982-6.381-12.537z"
                  ></path>
                  <path
                    fill="#f0d6b7"
                    d="M79.817 63.945c-1.218.795-2.255 1.787-3.424 2.636-2.593.128-4.008-.18-5.913-1.669.031-.12.223-.066.23-.213 2.775 1.237 6.304-.504 9.107-.754"
                  ></path>
                  <path
                    fill="#1d1919"
                    d="M79.135 76.728a.94.94 0 1 1-1.881 0 .94.94 0 0 1 1.881 0m.941 4.361a.94.94 0 1 1-1.882 0 .94.94 0 0 1 1.882 0"
                  ></path>
                </svg>
              </div>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Skills;
