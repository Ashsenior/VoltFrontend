import { Box, Dialog, TextField } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import StartupContext from "../../../context/StartupContext";
import axiosInstance from "../../../src/axiosAPi";
import { useRouter } from "next/router";

const idea = [
  { label: "yes", value: true },
  { label: "no", value: false },
];
const MemberModal = ({ handleClose, open, member }) => {
  const [idea, setIdea] = useState(false);
  const context = useContext(StartupContext);

  console.log(member?.user?.username);
  const initialValues = {
    idea: idea,
    message: "",
    from_user: false,
    username: member?.user?.username,
    startup_key: context?.startup_key,
  };

  console.log(member);
  const [values, setValues] = useState(initialValues);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    // name = event.target.name;
    // value = event.target.value;
    setValues({ ...values, [name]: value });
  };
  const onChangeIdea = () => {
    setIdea(!idea);
  };

  useEffect(() => {
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token) {
      setAuthenticated(true);
    }
  }, [authenticated]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    if (authenticated) {
      try {
        axiosInstance
          .post("http://127.0.0.1:8000/team/send-request/", {
            idea: values.idea,
            message: values.message,
            from_user: values.from_user,
            username: values.username,
            startup_key: values.startup_key,
          })
          .then((response) => {
            if (response.status === 201 || response.status === 200) {
              console.log("done !");
              router.push("/module/team");
              setLoading(false);
            } else {
              setMessage(
                "Some error occurred while completing your connection request!"
              );
              setLoading(false);
            }
          });
      } catch (error) {
        setLoading(false);
        throw error;
      }
    } else {
      setMessage("Fill the compulsory fields.");
    }
  };

  return (
    <div>
      <Dialog sx={{}} onClose={handleClose} open={open}>
        <form onSubmit={(event) => handleFormSubmit(event)}>
          <div style={{minWidth:"500px"}} className="p-10">
            <div>
              <label
                onClick={handleClose}
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <div>
                <div class="modal-body">
                  <div className="flex items-center justify-start gap-2 mt-4">
                    <img
                      className="w-14 rounded-full"
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      alt=""
                    />
                    <div className="flex flex-col items-start gap-1">
                      <h4>
                        {member?.user?.first_name} {member?.user?.last_name}
                      </h4>
                      <p>@{member?.user?.username}</p>
                    </div>
                    <p className="w-fit px-2 font-medium bg-green-100 rounded-full">
                      {member?.points} volts
                    </p>
                  </div>
                  <div class="tags flex gap-1 ml-2 mt-1">
                    <label htmlFor="" className="font-semibold">
                      Skills:{" "}
                    </label>
                    <span className="tag bg-blue-100 px-2 rounded-full w-fit ring-1 ring-green-500 ml-1">
                      {member?.skills}
                    </span>
                    <span className="tag bg-blue-100 px-2 rounded-full w-fit ring-1 ring-green-500 ml-1">
                      tag2
                    </span>
                    <span className="tag bg-blue-100 px-2 rounded-full w-fit ring-1 ring-green-500 ml-1">
                      tag3
                    </span>
                  </div>
                  <p class="description text-left p-2">{member?.bio}</p>

                  <Box
                    className="my-4"
                    sx={{
                      maxWidth: "100%",
                    }}
                  >
                    <TextField
                      style={{ width: "100%" }}
                      id="outlined-multiline-static"
                      label="Message"
                      multiline
                      minRows={4}
                      name="message"
                      value={values.message}
                      onChange={(event) => handleChange(event)}
                    />
                  </Box>
                </div>
                <div class="modal-footer flex justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="checkbox"
                      onChange={onChangeIdea}
                      value="idea"
                      name="idea"
                      id="idea"
                      checked={idea}
                    />
                    <label>Send Idea with invitation</label>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-sm bg-indigo-500 text-white hover:bg-indigo-600 rounded-sm border-0"
                  >
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default MemberModal;
