import React, { Component } from "react";
import axios from "axios";
import { Grid, Card, CardActionArea, CardContent, Typography, AppBar } from "@material-ui/core";

export default class tekkom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tekkom: [],
      visible: false,
    };
  }

  handleButton = (table) => {
    alert(table + "Available, Silahkan Memesan");
  };

  componentDidMount() {
    axios({
      method: "get",
      url: "http://localhost:3000/meja",
      headers: {
        accept: "/",
      },
    })
      .then((data) => {
        console.log(data.data);
        this.setState({
          tekkom: data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <AppBar style={{ padding: "10px", marginBottom: "100px" }}>
          <Typography style={{ margin: "auto" }}>List Nama</Typography>
        </AppBar>

        <Grid
          container
          md={11}
          spacing={4}
          style={{ marginTop: "50px", marginLeft: "10px" }}
        >
          {this.state.tekkom.map((results, index) => {
            return (
              
              <Grid item key={results.nama} md={3}>
                <Card>
                  <CardActionArea
                    onClick={() => this.handleButton(results.nama)}
                  >
                    <CardContent style={{ backgroundColor: "F0C040" }}>
                      <Typography>Nomor Meja: {results.nomor}</Typography>
                      <Typography>Kategori: {results.kategori}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}
