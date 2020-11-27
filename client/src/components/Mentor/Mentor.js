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
  // const name = useSelector((state) => state[0].name);
  // const surname = useSelector((state) => state[0].surname);
  // const city = useSelector((state) => state[0].city);
  // const country = useSelector((state) => state[0].country);
  // const timezone = useSelector((state) => state[0].timezone);
  // const company = useSelector((state) => state[0].resume[0].company);
  // const position = useSelector((state) => state[0].resume[0].position);
  const classes = useStyles();

  const { name, surname, city, country, timezone, resume } = mentor;
  const { company, position } = resume[0];
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
    </div>
  );
}

export default Mentor;
