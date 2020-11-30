import React from "react";
// import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import "./mentor.css";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
function Mentor({ mentor }) {
  const classes = useStyles();

  const {
    name,
    surname,
    city,
    country,
    timezone,
    resume,
    skills,
    price,
    summary,
  } = mentor;
  const { company, position } = resume[0];

  return (
    <div>
      <br></br>

      {/* <Card className="panel">
        <CardContent className="panel">
          <Typography variant="outlined" component="h2">
            {name} {surname}
            <Button>
              <BookmarkBorderIcon></BookmarkBorderIcon>
            </Button>
          </Typography>

          <Typography variant="body2" component="p">
            {city}, {country},{timezone}
          </Typography>
          <Typography variant="body2" component="p">
            {company} / {position}
            <br />
            <p>
              {skills.map((skill) => (
                <span>{skill} </span>
              ))}
            </p>
          </Typography>
          <button className="button">More Details</button>
        </CardContent>
      </Card> */}

      <div class="main__container">
        <div class="search__container"></div>
        <div class="card__container">
          <div class="card__item">
            <div class="card__img">
              <img src="https://picsum.photos/id/0/200" alt="" />
            </div>
            <div class="card__info">
              <div class="card__info__item">
                <p>
                  {name} {surname}
                  <i class="far fa-thumbs-up"></i>
                </p>
              </div>
              <div class="card__info__item">
                <p>
                  <i class="fas fa-map-marker-alt"></i> {city}, {country},
                  {timezone}
                </p>
              </div>
              <div class="card__info__item">
                <p>
                  <i class="fas fa-suitcase"></i> {company} / {position}
                </p>
              </div>
              <div class="card__info__item">
                <p>{summary}</p>
              </div>
              <div class="card__info__item">
                <p>
                  {skills.map((skill) => (
                    <span>{skill} </span>
                  ))}
                </p>
              </div>
            </div>
            <div class="card__action">
              <a href="https://www.w3schools.com">${price} / hour</a>
              <a href="https://www.w3schools.com" class="btn white">
                Schedule a call
              </a>
              <a href="https://www.w3schools.com" class="btn yellow">
                More Details
              </a>
              <a href="https://www.w3schools.com">Free test session</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mentor;
