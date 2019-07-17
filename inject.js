var ulTopNav = document.getElementById('topnav');

var liLinks = document.createElement('li');
liLinks.className='nav-menu';
ulTopNav.appendChild(liLinks);

var lnkRegister = document.createElement('a');
lnkRegister.setAttribute('href', 'https://online-campus.apus.edu/APUS/AMU/pad/srb/frmCampusHomeNotRegstrd.aspx?session=true');
lnkRegister.innerHTML="Register";
//lnkRegister.className="nav-menu";
liLinks.appendChild(lnkRegister);

var lnkCourseList = document.createElement('a');
lnkCourseList.setAttribute('href', 'https://online-campus.apus.edu/APUS/AMU/pad/srb/frmMyCourses.aspx');
lnkCourseList.innerHTML="Current Courses";
//lnkCourseList.className="nav-menu";
liLinks.appendChild(lnkCourseList);