"use strict";

var burgerMenu = function burgerMenu() {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.menu');
  var headerNav = document.querySelector('.header__menu');
  var headerUl = document.querySelector('.header__list');

  function adaptivMenu(windowWidth, breakpoint) {
    if (windowWidth < breakpoint) {
      menu.append(headerUl);
    } else {
      headerNav.append(headerUl);
    }
  }

  adaptivMenu(window.innerWidth, 1216);
  window.addEventListener('resize', function () {
    adaptivMenu(window.innerWidth, 1216);
  });
  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  });
};

burgerMenu();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1cmdlci5qcyJdLCJuYW1lcyI6WyJidXJnZXJNZW51IiwiYnVyZ2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImhlYWRlck5hdiIsImhlYWRlclVsIiwiYWRhcHRpdk1lbnUiLCJ3aW5kb3dXaWR0aCIsImJyZWFrcG9pbnQiLCJhcHBlbmQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3RCLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFDQSxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0EsTUFBTUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbEI7QUFDQSxNQUFNRyxRQUFRLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFqQjs7QUFHQSxXQUFTSSxXQUFULENBQXFCQyxXQUFyQixFQUFrQ0MsVUFBbEMsRUFBOEM7QUFDM0MsUUFBSUQsV0FBVyxHQUFHQyxVQUFsQixFQUE4QjtBQUUzQkwsTUFBQUEsSUFBSSxDQUFDTSxNQUFMLENBQVlKLFFBQVo7QUFFRixLQUpELE1BSU87QUFFSkQsTUFBQUEsU0FBUyxDQUFDSyxNQUFWLENBQWlCSixRQUFqQjtBQUVGO0FBQ0g7O0FBRURDLEVBQUFBLFdBQVcsQ0FBQ0ksTUFBTSxDQUFDQyxVQUFSLEVBQW1CLElBQW5CLENBQVg7QUFFQUQsRUFBQUEsTUFBTSxDQUFDRSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBRXJDTixJQUFBQSxXQUFXLENBQUNJLE1BQU0sQ0FBQ0MsVUFBUixFQUFtQixJQUFuQixDQUFYO0FBRUYsR0FKRDtBQU1BWCxFQUFBQSxNQUFNLENBQUNZLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07QUFDcENaLElBQUFBLE1BQU0sQ0FBQ2EsU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsUUFBeEI7QUFDQVgsSUFBQUEsSUFBSSxDQUFDVSxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsUUFBdEI7QUFDRixHQUhEO0FBS0YsQ0FoQ0Q7O0FBa0NBZixVQUFVIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidXJnZXJNZW51ID0gKCkgPT4ge1xuICAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpXG4gICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKVxuICAgY29uc3QgaGVhZGVyTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudScpXG4gICBjb25zdCBoZWFkZXJVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2xpc3QnKVxuXG5cbiAgIGZ1bmN0aW9uIGFkYXB0aXZNZW51KHdpbmRvd1dpZHRoLCBicmVha3BvaW50KSB7XG4gICAgICBpZiAod2luZG93V2lkdGggPCBicmVha3BvaW50KSB7XG5cbiAgICAgICAgIG1lbnUuYXBwZW5kKGhlYWRlclVsKVxuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgICBoZWFkZXJOYXYuYXBwZW5kKGhlYWRlclVsKVxuXG4gICAgICB9XG4gICB9XG5cbiAgIGFkYXB0aXZNZW51KHdpbmRvdy5pbm5lcldpZHRoLDEyMTYpXG5cbiAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG5cbiAgICAgIGFkYXB0aXZNZW51KHdpbmRvdy5pbm5lcldpZHRoLDEyMTYpXG5cbiAgIH0pXG5cbiAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgfSlcblxufVxuXG5idXJnZXJNZW51KCk7XG4iXX0=
