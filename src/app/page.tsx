import classes from "./page.module.scss";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import {
  Card,
  Button,
  CardMedia,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home = () => {
  return (
    <Grid container className={classes.main}>
      <Grid xs={12} className={classes.bannerWrapper}>
        banner is coming here...
      </Grid>

      {/* Company Section */}
      <Grid
        container
        xs={12}
        className={"site-wrapper " + classes.companyWrapper}
      >
        <Grid xs={2}>
          <div className={classes.imageWrapper}>
            <Image
              src={"/company-1.png"}
              fill
              alt="company-1"
              objectFit="contain"
            />
          </div>
        </Grid>
        <Grid xs={2}>
          <div className={classes.imageWrapper}>
            <Image
              src={"/company-1.png"}
              fill
              alt="company-1"
              objectFit="contain"
            />
          </div>
        </Grid>
        <Grid xs={2}>
          <div className={classes.imageWrapper}>
            <Image
              src={"/company-1.png"}
              fill
              alt="company-1"
              objectFit="contain"
            />
          </div>
        </Grid>
        <Grid xs={2}>
          <div className={classes.imageWrapper}>
            <Image
              src={"/company-1.png"}
              fill
              alt="company-1"
              objectFit="contain"
            />
          </div>
        </Grid>
        <Grid xs={2}>
          <div className={classes.imageWrapper}>
            <Image
              src={"/company-1.png"}
              fill
              alt="company-1"
              objectFit="contain"
            />
          </div>
        </Grid>
        <Grid xs={2}>
          <div className={classes.imageWrapper}>
            <Image
              src={"/company-1.png"}
              fill
              alt="company-1"
              objectFit="contain"
            />
          </div>
        </Grid>
      </Grid>

      {/* blog Section */}
      <Grid
        container
        spacing={3}
        xs={12}
        className={"site-wrapper " + classes.blogWrapper}
      >
        <Grid xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="194"
              image="/blog-1.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Divider textAlign="left">26 JULY 2023</Divider>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  display: "-webkit-box",
                  "-webkit-line-clamp": "2",
                  "-webkit-box-orient": "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Acerinox closes the first half of the year with an EBITDA 39%
                higher than that of the second half of 2022
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  display: "-webkit-box",
                  "-webkit-line-clamp": "3",
                  "-webkit-box-orient": "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Profit after tax and non-controlling interests between January
                and June amounted to EUR 278 million, a significant improvement
                compared to the second half of 2022. Acerinox achieved good
                results in the first half of the year in the current complex
                environment and targets a new profitability threshold, as
                reported by the CEO, Bernardo Velázquez.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={3}>
          <Card>
            <CardMedia
              component="img"
              height="194"
              image="/blog-1.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Divider textAlign="left">26 JULY 2023</Divider>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  display: "-webkit-box",
                  "-webkit-line-clamp": "2",
                  "-webkit-box-orient": "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Acerinox closes the first half of the year with an EBITDA 39%
                higher than that of the second half of 2022
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  display: "-webkit-box",
                  "-webkit-line-clamp": "3",
                  "-webkit-box-orient": "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Profit after tax and non-controlling interests between January
                and June amounted to EUR 278 million, a significant improvement
                compared to the second half of 2022. Acerinox achieved good
                results in the first half of the year in the current complex
                environment and targets a new profitability threshold, as
                reported by the CEO, Bernardo Velázquez.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={3}>
          <Card>
            <CardMedia
              component="img"
              height="194"
              image="/blog-1.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Divider textAlign="left">26 JULY 2023</Divider>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  display: "-webkit-box",
                  "-webkit-line-clamp": "2",
                  "-webkit-box-orient": "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Acerinox closes the first half of the year with an EBITDA 39%
                higher than that of the second half of 2022
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  display: "-webkit-box",
                  "-webkit-line-clamp": "3",
                  "-webkit-box-orient": "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Profit after tax and non-controlling interests between January
                and June amounted to EUR 278 million, a significant improvement
                compared to the second half of 2022. Acerinox achieved good
                results in the first half of the year in the current complex
                environment and targets a new profitability threshold, as
                reported by the CEO, Bernardo Velázquez.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12}>
          <Button variant="contained">
            Go to Press room
            <ArrowForwardIcon sx={{ height: 10 }} />
          </Button>
        </Grid>
      </Grid>

      {/* widget Section */}
      <Grid container spacing={2} xs={12} className={classes.widgetWrapper}>
        <Grid xs={12} md={3}>
          <div className={classes.widgetItem}>
            <Typography variant="h4" fontWeight={"bold"} sx={{ mb: 1 }}>
              The widest range of products and solutions
            </Typography>
            <Typography variant="body1">
              Sustainable materials of the highest quality and the best advice
            </Typography>
          </div>
        </Grid>
        <Grid xs={12} md={3}>
          <div className={classes.widgetItem}>
            <Image
              src={"/applications.jpg"}
              fill
              alt="applications"
              objectFit="cover"
              style={{ zIndex: 0 }}
            />
            <Typography
              variant="h4"
              fontWeight={"bold"}
              sx={{ mb: 1, zIndex: 1 }}
            >
              Applications
            </Typography>
            <Button sx={{ zIndex: 1 }} variant="outlined">
              <ArrowForwardIcon />
            </Button>
          </div>
        </Grid>
        <Grid xs={12} md={3}>
          <div className={classes.widgetItem}>
            <Image
              src={"/applications.jpg"}
              fill
              alt="applications"
              objectFit="cover"
              style={{ zIndex: 0 }}
            />
            <Typography
              variant="h4"
              fontWeight={"bold"}
              sx={{ mb: 1, zIndex: 1 }}
            >
              Applications
            </Typography>
            <Button sx={{ zIndex: 1 }} variant="outlined">
              <ArrowForwardIcon />
            </Button>
          </div>
        </Grid>
        <Grid xs={12} md={3}>
          <div className={classes.widgetItem}>
            <Image
              src={"/applications.jpg"}
              fill
              alt="applications"
              objectFit="cover"
              style={{ zIndex: 0 }}
            />
            <Typography
              variant="h4"
              fontWeight={"bold"}
              sx={{ mb: 1, zIndex: 1 }}
            >
              Applications
            </Typography>
            <Button sx={{ zIndex: 1 }} variant="outlined">
              <ArrowForwardIcon />
            </Button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
