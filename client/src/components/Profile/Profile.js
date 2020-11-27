
import Education from "../Education/Education";
import Person from "../Person/Person";
import Projects from "../Projects/Projects";
import Price from "../Price/Price";
import Resume from "../Resume/Resume";
import BenefitList from "../BenefitList/BenefitList";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";
import Mentor from "../Mentor/Mentor";

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

function Profile() {
  const classes = useStyles();
  return (
    <div className="full">
      <h1 className="heading">Profile</h1>

      <div>
        <br></br>
        <Card className={classes.root} className="profile">
          <CardContent>
            <Typography variant="outlined" component="h4">
              <Person />
              <Price />
            </Typography>
          </CardContent>
        </Card>

        <br></br>
        <Card className={classes.root} className="profile">
          <CardContent>
            <Typography variant="outlined" component="h4">
              <BenefitList />
            </Typography>
          </CardContent>
        </Card>

        <br></br>
        <Card className={classes.root} className="profile">
          <CardContent>
            <Typography variant="outlined" component="h4">
              <Resume />
            </Typography>
          </CardContent>
        </Card>

        <br></br>
        <Card className={classes.root} className="profile">
          <CardContent>
            <Typography variant="outlined" component="h4">
              <Projects />
            </Typography>
          </CardContent>
        </Card>

        <br></br>
        <Card className={classes.root} className="profile">
          <CardContent>
            <Typography variant="outlined" component="h4">
              <Education />
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Profile;
