import React from "react";
import { useSelector } from "react-redux";
import { makeStyles, Card, CardContent, Typography } from "@material-ui/core";

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)",
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

function Price() {
  // const classes = useStyles();

  const price = useSelector((state) => state.mentors[0].price);
  return (
    // <Card className={classes.root}>
    //   <CardContent>
    //     <Typography variant="h5" component="h2">
    //       Price
    //     </Typography>

    //     <Typography variant="body2" component="p">
    //       Hour session: {price}$
    //       <br />
    //       15 min test call: free
    //     </Typography>
    //   </CardContent>
    // </Card>

    <div>
      <p> Hour session: {price}$ </p>{" "}
    </div>
  );
}
export default Price;
