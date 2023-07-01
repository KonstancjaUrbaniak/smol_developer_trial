var groupData;

$(document).ready(function() {
    $.ajax({
        url: "groupData.json",
        method: "GET",
        dataType: "json",
        success: function(data) {
            groupData = data;
            loadGroupInfo();
        }
    });
});

function loadGroupInfo() {
    var groupInfo = groupData.groupInfo;
    $('#groupInfo').html(groupInfo);
}

function loadMembers() {
    var members = groupData.members;
    var memberList = '';
    members.forEach(function(member) {
        memberList += '<li>' + member.name + '</li>';
    });
    $('#memberList').html(memberList);
}

function loadPublications() {
    var publications = groupData.publications;
    var publicationList = '';
    publications.forEach(function(publication) {
        publicationList += '<li>' + publication.title + '</li>';
    });
    $('#publicationList').html(publicationList);
}

$('#aboutTab').on('click', loadGroupInfo);
$('#membersTab').on('click', loadMembers);
$('#publicationsTab').on('click', loadPublications);