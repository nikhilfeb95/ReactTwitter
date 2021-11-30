const TWEET_API = 'http://localhost:4000/api/tweets';

export const fetchAllTweets = () =>
    fetch(TWEET_API)
        .then(response => response.json());

export const postNewTweet = (dispatch, newTweet) =>
fetch(TWEET_API, {
    method: 'POST',
    body: JSON.stringify(newTweet),
    headers: {
        'content-type': 'application/json'
    }
})
    .then(response => response.json())
    .then(tweet =>
        dispatch({
            type: 'create-tweet',
            tweet
        })
    );
    
export const deleteTweet = (dispatch, tweet) =>{
    console.log("In delete!!")
    console.log(tweet._id);
    fetch(`${TWEET_API}/${tweet._id}`, {
        method: 'DELETE'
    }).then(response => dispatch({
        type: 'fetch-all-tweets',
        tweet
    }));
}

export const likeTweet = (dispatch, tweet) =>{
    fetch(`${TWEET_API}/${tweet._id}/like`, {
        method: 'PUT',
        body : JSON.stringify(tweet),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(response =>
        dispatch({
            type: 'fetch-all-tweets',
            tweet
    }));
}
