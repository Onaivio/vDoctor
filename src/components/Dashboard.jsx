import React from "react";
// import UserImg from "../assets/pngwing.com (59).png";
import RecycleBin from "../assets/pngwing.com (76).png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div>
      {/* <div class="h-36 bg-transparent rounded-b-[30%] px-7">
        <div class="flex items-center py-5 mb-5 justify-between">
          <div onclick="toggle()" class="toggleBtn cursor-pointer">
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.75 16H24V13.3333H17.75V16ZM0 0V2.66667H7.75V0H0ZM0 9.33333H24V6.66667H0V9.33333Z"
                fill="#16a34a"
              />
            </svg>
          </div>
          <img src={UserImg} alt="" class="w-14 h-14 rounded-full" />
        </div> */}


      <Navbar />
      <div class="z-[50] h-36 bg-transparent rounded-b-[30%] px-7">
        <Splide className="my-3 p-3 bg-white" aria-label="myimges">
          <SplideSlide>
            <img src={RecycleBin} alt="Img1" />
          </SplideSlide>
          <SplideSlide>
            <img src={RecycleBin} alt="Img2" />
          </SplideSlide>
        </Splide>
      </div>
      <div class="mt-20 md:mx-32 mx-5 py-5">
        <div class="grid grid-cols-2 gap-x-4 gap-y-6">

          <a href="./wasteinfo">
            <div className="bg-[#407BFF] rounded-lg text-white p-2 space-y-5 shadow-xl">
              <div class="">
                <svg
                  width="35"
                  height="40"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    d="M206.7 45.1C224.2 17 255 0 288 0s63.8 17 81.3 45.1l38.6 61.7 27-15.6c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3l-23.4 87.4c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l28.4-16.4L315 79c-5.8-9.3-16-15-27-15s-21.2 5.7-27 15l-17.5 28c-9.2 14.8-28.6 19.5-43.6 10.5c-15.3-9.2-20.2-29.2-10.7-44.4l17.5-28zM461.5 251.9c15-9 34.4-4.3 43.6 10.5l24.4 39.1c9.4 15.1 14.4 32.4 14.6 50.2c.3 53.1-42.7 96.4-95.8 96.4L352 448v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2v32l96.2 0c17.6 0 31.9-14.4 31.8-32c0-5.9-1.7-11.7-4.8-16.7l-24.4-39.1c-9.5-15.2-4.7-35.2 10.7-44.4zm-364.6-31L68 204.2c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20l87.4-23.4c12.8-3.4 26 4.2 29.4 17L214 241.2c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-26.5-15.3-51.5 82.4c-3.1 5-4.8 10.8-4.8 16.7c-.1 17.6 14.2 32 31.8 32l32.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32.2 0c-53.1 0-96.1-43.2-95.8-96.4c.1-17.8 5.1-35.1 14.6-50.2l50.3-80.5z"
                    fill="white"
                  />
                </svg>
              </div>
              <p class="font-bold text-sm leading-tight">Dispose Waste</p>
            </div>
          </a>

          <a href="./.html">
            <div class="bg-white rounded-lg text-[#16a34a] p-2 space-y-5 shadow-xl">
              <div class="">
                <svg
                  width="35"
                  height="40"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"
                    fill="#16a34a"
                  />
                </svg>
              </div>
              <p class="font-bold text-sm leading-tight">Climate Update</p>
            </div>
          </a>
          <a href="./calender.html">
            <div class="bg-white rounded-lg text-[#16a34a] p-4 space-y-5 shadow-xl">
              <div class="">
                <svg
                  width="35"
                  height="40"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM176 128c35.35 0 64 28.65 64 64s-28.65 64-64 64s-64-28.65-64-64S140.7 128 176 128zM272 384h-192C71.16 384 64 376.8 64 368C64 323.8 99.82 288 144 288h64c44.18 0 80 35.82 80 80C288 376.8 280.8 384 272 384zM496 320h-128C359.2 320 352 312.8 352 304S359.2 288 368 288h128C504.8 288 512 295.2 512 304S504.8 320 496 320zM496 256h-128C359.2 256 352 248.8 352 240S359.2 224 368 224h128C504.8 224 512 231.2 512 240S504.8 256 496 256zM496 192h-128C359.2 192 352 184.8 352 176S359.2 160 368 160h128C504.8 160 512 167.2 512 176S504.8 192 496 192z"
                    fill="#16a34a"
                  />
                </svg>
              </div>
              <p class="font-bold text-sm leading-tight">My profile</p>
            </div>
          </a>
          <a href="./calender.html">
            <div class="bg-white rounded-lg text-[#16a34a] p-4 space-y-5 shadow-xl">
              <div class="">
                <svg
                  width="35"
                  height="40"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"
                    fill="#16a34a"
                  />
                </svg>
              </div>
              <p class="font-bold text-sm leading-tight">Green Chat</p>
            </div>
          </a>
          <a href="./calender.html">
            <div class="bg-white rounded-lg text-[#16a34a] p-4 space-y-5 shadow-xl">
              <div class="">
                <svg
                  width="35"
                  height="40"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM208.4 208c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zm92.4 25.6c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4c30.4-40.5 91.2-40.5 121.6 0c5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2c-17.6-23.5-52.8-23.5-70.4 0z"
                    fill="#16a34a"
                  />
                </svg>
              </div>
              <p class="font-bold text-sm leading-tight">Tips</p>
            </div>
          </a>
          <a href="./calender.html">
            <div class="bg-white rounded-lg text-[#16a34a] p-4 space-y-5 shadow-xl">
              <div class="">
                <svg
                  width="35"
                  height="40"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 336c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"
                    fill="#16a34a"
                  />
                </svg>
              </div>
              <p class="font-bold text-sm leading-tight">Wallet</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
