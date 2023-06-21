// Get all course elements
const courses = document.querySelectorAll('.course');

// Add click event listener to each course
courses.forEach(course => {
  course.addEventListener('click', () => {
    // Collapse all other courses
    courses.forEach(otherCourse => {
      if (otherCourse !== course) {
        const otherDetails = otherCourse.querySelector('.course-details');
        otherDetails.style.display = 'none';
      }
    });

    // Toggle visibility of clicked course details
    const details = course.querySelector('.course-details');
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
  });
});
