import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import TweetListItem from "./TweetListItem";

import { fetchAllTweets } from "../../services/twitterService";


const TweetList = () => {
    const [tweets, setTweets] = useState([])
    useEffect(() =>
                  fetchAllTweets()
                      .then(tweets => setTweets(tweets)));
    console.log(tweets)
    
    return(
        <ul className="list-group">
            {
                tweets.map(tweet =>
                    <TweetListItem tweet={tweet}/>
                )
            }
        </ul>
    )
};

export default TweetList;