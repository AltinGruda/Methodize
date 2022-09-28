import React, { useContext, useState } from "react";
import { Context as UserContext } from "../../context/store/UserStore";
import { NavLink } from "react-router-dom";
import "../../css/Navbar.css";
import { RiMenuFoldLine, RiMenuFill } from "react-icons/ri";
import { ImLinkedin, ImGithub } from "react-icons/im";
import { Context as TeamContext } from "../../context/store/TeamStore";
import { Modal } from "@material-ui/core";
import TeamForm from "../Forms/TeamForm";
// import Home from "../../assets/Home";
// import Tasks from "../../assets/tasks";
import Task from '../../assets/task.svg'
import Project from "../../assets/project";
import Team from "../../assets/team.svg";
import Logo from "../../assets/Logo";
import Charts from "../Pages/Charts";
import Chart from '../../assets/chart.svg'
import Chart1 from '../../assets/chart1.svg'
import Chart2 from '../../assets/chart2.svg'
import Chart3 from '../../assets/chart3.svg'
import Chart4 from '../../assets/chart4.svg'
import Home from '../../assets/home.svg'
import Chat from '../../assets/chat.svg'
import Admin from '../../assets/admin.png'


const LeftNavBar = ({ showSidebar, sidebar }) => {
  // const [teams, setTeams] = useState([]);
  const [teamState] = useContext(TeamContext);
  const [open, setOpen] = useState(false);
  const [userState] = useContext(UserContext);

  //NOTE : Only other option that worked was setting state either in here or in App.js and call it for global state. ReducerContext does not work

  const openModal = () => {
    setOpen(true);
  };
  // console.log(userState)

  const closeModal = () => {
    setOpen(false);
  };

  const orderedList = teamState.teams.sort(function (a, b) {
    return new Date(a.createdAt) - new Date(b.createdAt);
  });

  const renderedList = orderedList.map((team, i) => {
    return (
      <NavLink
        className="left-nav-bar-team-link"
        style={{ textDecoration: "none", color: "white" }}
        to={`/team/${team.id}/${team.name}`}
        activeClassName="navlink--active"
        key={i}
      >
        <div>
          <p style={{ margin: "0px", paddingLeft: "30px" }}>{team.name}</p>
        </div>
      </NavLink>
    );
  });

  // console.log(userState.user.name)
  const modalBody = (
    <div className="modal-container">
      <TeamForm clickClose={closeModal} open={open}></TeamForm>
    </div>
  );
  return (
    <div>
      <div className="left-nav-bar-container">
        <div className={sidebar ? "nav-menu active" : "nav-menu collapsed"}>
          <div className="left-nav-menu-container">
            <div className="left-nav-menu-top">
              <div
                className="logo"
                style={{
                  color: "white",
                  marginLeft: "10px",
                  cursor: "default",
                }}
              >
                <Logo style={{}} />
              </div>
              <div className="collapse-menu-icon-container">
                <RiMenuFoldLine
                  style={{
                    color: "white",
                    fontSize: "24px",
                    cursor: "pointer",
                  }}
                  onClick={showSidebar}
                />
              </div>
            </div>

            <div
              className="main-menu-items-container"
              style={{ marginTop: "10px" }}
            >
              <NavLink
                exact
                to="/"
                className="left-nav-bar-main-link"
                activeClassName="navlink--active"
              >
                <div className="left-nav-bar-link">
                  <img src={Home} alt="chart-icon" width={22} />
                  <div>
                    <p className="left-nav-bar-link-title">Home</p>
                  </div>
                </div>
              </NavLink>
              <NavLink
                to="/tasks"
                className="left-nav-bar-main-link"
                activeClassName="navlink--active"
              >
                <div className="left-nav-bar-link">
                  <img src={Task} alt="chart-icon" width={22} />
                  <div>
                    <p
                      className="left-nav-bar-link-title"
                      style={{ marginLeft: "4px" }}
                    >
                      My Tasks
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink
                to="/charts"
                className="left-nav-bar-main-link"
                activeClassName="navlink--active"
              >
                <div className="left-nav-bar-link">
                  <img src={Chart4} alt="chart-icon" width={22} />
                  <div>
                    <p
                      className="left-nav-bar-link-title"
                      style={{ marginLeft: "4px" }}
                    >
                      See Charts
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink
                to="/join"
                className="left-nav-bar-main-link"
                activeClassName="navlink--active"
              >
                <div className="left-nav-bar-link">
                  <img src={Chat} alt="chart-icon" width={22} />
                  <div>
                    <p
                      className="left-nav-bar-link-title"
                      style={{ marginLeft: "4px" }}
                    >
                      Join Meeting
                    </p>
                  </div>
                </div>
              </NavLink>
              {userState.user.name === 'altin gruda' &&
                <div className="left-nav-bar-main-link">
                  <img src={Admin} alt="chart-icon" width={22} />
                  <a href="http://localhost:8080/admin" className="left-nav-bar-link-title" style={{
                    textDecoration: "none",
                    color: "white",
                  }}>Admin</a>
                </div>}
              {/* <NavLink
                to="/projects"
                className="left-nav-bar-main-link"
                activeClassName="navlink--active"
              >
                <div className="left-nav-bar-link">
                  <Project />
                  <div>
                    <p className="left-nav-bar-link-title">Projects</p>
                  </div>
                </div>
              </NavLink> */}
            </div>
            <div className="teams-items-container">
              <div className="teams-items-header" style={{ display: "flex" }}>
                <img src={Team} alt="team-icon" width={22} />
                <div>
                  <p className="left-nav-bar-link-title">Teams</p>
                </div>
                <p
                  style={{ marginLeft: "114px", cursor: "pointer" }}
                  onClick={openModal}
                >
                  +
                </p>
              </div>
              {teamState.teams ? renderedList : <div>Loading...</div>}
            </div>

          </div>
        </div>

        {sidebar ? null : (
          <div
            className="menu-icon"
            style={{
              paddingTop: "25px",
              paddingLeft: "20px",
              paddingBottom: "22px",
              backgroundColor: "white",
            }}
          >
            <RiMenuFill
              style={{
                fontSize: "24px",
                cursor: "pointer",
              }}
              onClick={showSidebar}
            />
          </div>
        )}
      </div>
      <Modal open={open} onClose={closeModal}>
        {modalBody}
      </Modal>
    </div>
  );
};

export default LeftNavBar;
