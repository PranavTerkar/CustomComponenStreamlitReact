import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { CardHeader } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import LaunchIcon from "@mui/icons-material/Launch"

class CardComponent extends StreamlitComponentBase<any> {
  public render = (): ReactNode => {
    const title = this.props.args["title"]
    const subTitle = this.props.args["subTitle"]
    const body = this.props.args["body"]
    const link = this.props.args["link"]

    return (
      <div style={{padding: "50px", background: "#8EA7E9", borderRadius: "20px"}}>
        <Card variant="outlined">
          <CardHeader 
          header = {title}
          subheader = {subTitle}
          />
          <CardContent>
            <Typography variant="body2">
              {body}
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton 
            aria-label = "open url"
            href={link}
            target = "_PARENT">
            
              <LaunchIcon/>
            </IconButton>
          </CardActions>
        </Card>
      </div>
    )
  }
}
export default withStreamlitConnection(CardComponent)
