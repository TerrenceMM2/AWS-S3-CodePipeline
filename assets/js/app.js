$(document).ready(() => {

    $.ajax({
        url: "https://api.github.com/repos/TerrenceMM2/AWS-S3-CodePipeline/branches/master",
        method: "GET"
    }).then(response => {
        $("#commit-date").text(`${moment(response.commit.commit.committer.date).format("dddd, MMMM Do, YYYY @ h:mm:ss A")}`);
        $("#commit-msg").text(`"${response.commit.commit.message}"`);
    })

});