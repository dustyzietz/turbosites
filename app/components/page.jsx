import React from "react";
import Avatar from "./Avatar";
import Input from "./Input";
import PriceInput from "./PriceInput";
import Radio from "./Radio";
import Select from "./Select";
import Textarea from "./Textarea";
import Checkboxes from "./Checkboxes";
import Badge from "./Badge";
import Button from "./Button";
import CircularButton from "./CircularButton";
import Dropdown from "./Dropdown";
import Modal from "./Modal";
import { CheckIcon } from '@heroicons/react/24/outline';
import Slideout from "./Slideout";

const page = () => {
  return (
    <div>
      <h1>Component List</h1>
      <div className="m-8">
        <Avatar size={6} />
      </div>
      <div className="m-8">
        <Checkboxes />
      </div>
      <div className="m-8">
        <Input />
      </div>
      <div className="m-8">
        <PriceInput />
      </div>
      <div className="m-8">
        <Radio />
      </div>
      <div className="m-8">
        <Select />
      </div>
      <div className="m-8">
        <Textarea />
      </div>
      <div className="m-8">
        <Badge text={"xl"} hasX={true}/>
      </div>
      <div className="m-8">
        <Button color= "green" />
      </div>
      <div className="m-8">
        <CircularButton color={"red"} icon="minus"/>
      </div>
      <div className="m-8">
        <Dropdown />
      </div>
      <div className="m-8">
       {/* the state for the modal will live in the slice */}
        <Modal>
          <div>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <CheckIcon
                className="h-6 w-6 text-green-600"
                aria-hidden="true"
              />
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <h3
                className="text-base font-semibold leading-6 text-gray-900"
              >
                Payment successful
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur amet labore.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6">
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            //  onClick={() => setOpen(false)}
            >
              Go back to dashboard
            </button>
          </div>
        </Modal>
      </div>
      <div className="m-8">
        <Slideout />
      </div>
    </div>
  );
};

export default page;
