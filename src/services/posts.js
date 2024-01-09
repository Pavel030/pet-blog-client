export function calculateRelativeTime(post) {
    const createdTime = new Date(post.created_at);
    const currentTime = new Date();
    const timeDifference = currentTime - createdTime;

    const daysAgo = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    const hoursAgo = Math.floor(timeDifference / (60 * 60 * 1000));
    const minutesAgo = Math.floor(timeDifference / (60 * 1000));
    const secondsAgo = Math.floor(timeDifference / 1000);

    if (minutesAgo < 1) {
        return `${secondsAgo} seconds ago`;
    } else if (minutesAgo < 60) {
        return `${minutesAgo} minutes ago`;
    } else if (hoursAgo >= 1 && hoursAgo < 24) {
        return `${hoursAgo} hours ago`;
    } else if (daysAgo === 1) {
        return `one day ago`;
    } else if (daysAgo > 1 && daysAgo < 30.417) {
        return `${daysAgo} days ago`;
    } else {
        return 'More times ago';
    }
}

export function getTagStyle(tagId) {
    switch (tagId) {
        case 1:
            return {borderBottom: 'solid 4px #5E8CED'};
        case 2:
            return {borderBottom: 'solid 4px #f6b820'};
        case 3:
            return {borderBottom: 'solid 4px #FF0000'};
        case 4:
            return {borderBottom: 'solid 4px #42B883'};
        case 5:
            return {borderBottom: 'solid 4px #ff8bff'};
        default:
            return {};
    }
}