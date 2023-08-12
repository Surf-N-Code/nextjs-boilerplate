import Link from 'next/link';
import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { FaHome } from 'react-icons/fa';
import { BiSolidCheckbox } from 'react-icons/bi';
import 'tailwindcss/tailwind.css';

const Dashboard = () => {
  return (
    <div>
      <div className="flex -mb-10">
        <aside className="w-96 px-6 py-6 border-r-2 border-[#c0c0c0] max-h-full">
          <div className="flex text-[#c0c0c0] items-center gap-3 py-1.5">
            <FaHome color="#c0c0c0" size={20} />
            <p>My Home</p>
          </div>
          <div className="flex items-center gap-3 my-3">
            <div className="rounded-md bg-[#ffbc0a]">
              <BiSolidCheckbox color="#ffbc0a" />
            </div>
            <div className="w-full flex items-center justify-between">
              <p>Bedroom 1</p>
              <CiEdit size={17} color="#c0c0c0" />
            </div>
          </div>
          <div className="flex items-center gap-3 my-3">
            <div className="rounded-md bg-[#54d45d]">
              <BiSolidCheckbox color="#54d45d" />
            </div>
            <div className="w-full flex items-center justify-between">
              <p>Bedroom 2</p>
              <CiEdit size={17} color="#c0c0c0" />
            </div>
          </div>
          <div className="flex items-center gap-3 my-3">
            <div className="rounded-md bg-[#1e4fff]">
              <BiSolidCheckbox color="#1e4fff" />
            </div>
            <div className="w-full flex items-center justify-between">
              <p>Living Room</p>
              <CiEdit size={17} color="#c0c0c0" />
            </div>
          </div>
          <div className="flex items-center gap-3 my-3">
            <div className="rounded-md bg-[#ffbc0a]">
              <BiSolidCheckbox color="#ffbc0a" />
            </div>
            <div className="w-full flex items-center justify-between">
              <p>Kitchen</p>
              <CiEdit size={17} color="#c0c0c0" />
            </div>
          </div>
          <div className="flex items-center gap-3 my-3">
            <div className="rounded-md bg-[#54d45d]">
              <BiSolidCheckbox color="#54d45d" />
            </div>
            <div className="w-full flex items-center justify-between">
              <p>Backyard</p>
              <CiEdit size={17} color="#c0c0c0" />
            </div>
          </div>
          <div className="flex items-center gap-3 my-3">
            <div className="rounded-md bg-[#1e4fff]">
              <BiSolidCheckbox color="#1e4fff" />
            </div>
            <div className="w-full flex items-center justify-between">
              <p>Bathroom</p>
              <CiEdit size={17} color="#c0c0c0" />
            </div>
          </div>
          <button className="text-[#c0c0c0] border-2 border-[#c0c0c0] rounded-2xl px-5 py-2 w-full">
            + Create a New Room
          </button>
        </aside>

        <main className="flex flex-col m-14">
          <div className="">
            <img src="../assets/dashboard.png" className="w-full" alt="" />
            <div className="flex items-center justify-between my-4">
              <p className="text-[#959595] w-4/6">
                Morbi viverra massa pellentesque elit habitasse est feugiat.
                Commodo sem sed amet egestas mauris sed viverra id. Suscipit
                consequat lobortis in mmodo arcudrgehgesh.
              </p>
              <div className="bg-[#2d643e] text-center text-white px-12 py-3 rounded-3xl">
                + Log Activity
              </div>
            </div>
          </div>

          <div className="ml-14 my-10 flex flex-col gap-14">
            <div className="flex items-end justify-between">
              <div className="grid gap-1 w-2/3">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-[#ffbc0a]">
                    <BiSolidCheckbox color="#ffbc0a" />
                  </div>
                  <p>Main Living Room</p>
                </div>
                <div className="flex items-center gap-4 -ml-14">
                  <img src="../assets/wood.png" alt="" />
                  <div className="flex gap-12">
                    <span className="font-bold">
                      Electricity Cables Maintenance
                    </span>
                    <span className="text-[#959595]">June 10, 2023</span>
                  </div>
                </div>
                <p>
                  Morbi viverra massa pellentesque elit habitasse est feugiat.
                  Commodo sem sed amet egestas mauris sed viverra id. Suscipit
                  consequat.
                </p>
              </div>
              <div className="bg-[#efefef] text-center text-[#959595] px-14 py-3 rounded-3xl">
                Open Image
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div className="grid gap-1 w-2/3">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-[#1e4fff]">
                    <BiSolidCheckbox color="#1e4fff" />
                  </div>
                  <p>Main Living Room</p>
                </div>
                <div className="flex items-center gap-4 -ml-14">
                  <img src="../assets/electric.png" alt="" />
                  <div className="flex gap-12">
                    <span className="font-bold">
                      Electricity Cables Maintenance
                    </span>
                    <span className="text-[#959595]">June 10, 2023</span>
                  </div>
                </div>
                <p>
                  Morbi viverra massa pellentesque elit habitasse est feugiat.
                  Commodo sem sed amet egestas mauris sed viverra id. Suscipit
                  consequat.
                </p>
              </div>
              <div className="bg-[#efefef] text-center text-[#959595] px-14 py-3 rounded-3xl">
                Open Image
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
