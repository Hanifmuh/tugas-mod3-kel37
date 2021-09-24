import React, { Component } from "react";
import axios from "axios";
import { Grid, Card, CardActionArea, CardContent, Typography } from "@material-ui/core";

export default class list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      visible: false,
    };
  }

  handleButton = (table) => {
    alert(table + " Available, Silahkan Memesan");
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
      <div>
         <main className="block">

          <h1 style={{ textAlign: "center" }}>List Tempat</h1>


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
        </main>
      </div>
    );
  }
}
