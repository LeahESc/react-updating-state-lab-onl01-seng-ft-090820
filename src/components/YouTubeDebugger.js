// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitrateClick = () => {
        this.setState(previousState => {
            return {
                ...previousState, 
                settings: {
                    ...previousState.settings,
                    bitrate: 12,
                    
                }
            }
        })
    }

    handleResolutionClick = () => { 
        this.setState(previousState => {
            return {
                ...previousState, 
                settings:{
                    ...previousState.settings,
                   video: {
                       resolution: '720p'
                   }
                }
            }
        })
    }
    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitrateClick}>Bitrate</button>
                <button className="resolution" onClick={this.handleResolutionClick}>Resolution</button>

            </div>
        )
    }
}
