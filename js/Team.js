function GenerateTeamHTML(arrTeam){
    var html='';

    for(var i = 0; i < arrTeam.length; i++){
        var member=arrTeam[i];

        html += `<li>
            <img src="${member.image}" alt="${member.name}">
            <p>${member.name}</p>
            <p><a href="mailto:${member.email}">${member.email}</a></p>
        </li>`;
    }

    return html;
}
