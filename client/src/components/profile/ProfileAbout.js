import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <Fragment>
      <div class="profile-about bg-light p-2">
        {bio && (
          <Fragment>
            <h2 class="text-primary">{name.trim().split(" ")}s Bio</h2>
            <p>{bio}</p>
          </Fragment>
        )}

        <div class="line"></div>
        <h2 class="text-primary">Skill Set</h2>
        <div class="skills">
          {skills.map((index, skill) => (
            <div className="p-1" key={index}>
              <i className="fa fa-check"></i>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

ProfileAbout.propTypes = {};

export default ProfileAbout;
