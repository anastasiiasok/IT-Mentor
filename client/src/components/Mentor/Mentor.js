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
  root: {
    // minWidth: 275,
    width: 600,
    padding: 24,
    marginLeft: 100,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
function Mentor({ mentor }) {

  const classes = useStyles();



  
  const {name, surname, city, country, timezone,resume, skills, price} = mentor;
  const {company, position} = resume[0];

  return (
    <div>
      <br></br>


      <Card className={classes.root} className="panel">
        <CardContent>
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
          </Typography>
        </CardContent>
        <Button>More Details</Button>
      </Card>

      <span>{timezone}</span>
      <br></br>
      <span>{price}</span>
      <p>{skills.map((skill)=><span> {skill} </span>)}</p>
      <p>
        {company} / {position}
      </p>

    </div>
  );
}

export default Mentor;
