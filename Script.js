// Function to show and hide subject content
function showSubject(subject) {
  // Hide all subjects
  const subjects = document.querySelectorAll('.subject');
  subjects.forEach(sub => sub.style.display = 'none');
  
  // Show the selected subject
  document.getElementById(subject).style.display = 'block';
}

// Example function to add teacher, topic, and links dynamically
function addContent(subject, teacher, topic, youtubeLink) {
  const teacherDiv = document.getElementById(`teacher-${subject}`);
  
  // Create teacher element
  const teacherElement = document.createElement('div');
  teacherElement.classList.add('teacher-element');
  teacherElement.innerHTML = `<h3>${teacher}</h3>`;
  
  // Create topic and video link
  const topicElement = document.createElement('div');
  topicElement.classList.add('topic');
  topicElement.innerHTML = `<strong>${topic}</strong>`;
  
  const watchFromWebsiteButton = document.createElement('button');
  watchFromWebsiteButton.classList.add('watch-btn');
  watchFromWebsiteButton.textContent = "Watch from Website";
  watchFromWebsiteButton.onclick = () => playVideo(youtubeLink);
  
  const watchThroughYouTubeButton = document.createElement('button');
  watchThroughYouTubeButton.classList.add('watch-btn');
  watchThroughYouTubeButton.textContent = "Watch through YouTube";
  watchThroughYouTubeButton.onclick = () => window.open(youtubeLink, '_blank');
  
  topicElement.appendChild(watchFromWebsiteButton);
  topicElement.appendChild(watchThroughYouTubeButton);
  teacherElement.appendChild(topicElement);
  
  // Add teacher content to the subject
  teacherDiv.appendChild(teacherElement);
}

// Function to play video using YouTube API (Iframe)
function playVideo(videoUrl) {
  const player = document.getElementById('player');
  player.style.display = 'block';
  player.src = `https://www.youtube.com/embed/${getYouTubeVideoID(videoUrl)}?autoplay=1&controls=1`;
}

// Extract YouTube video ID from the URL
function getYouTubeVideoID(url) {
  const regExp = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

// Example: Adding teacher, topics, and YouTube links dynamically
addContent('maths', 'Mr. John', 'Algebra Basics', 'https://www.youtube.com/watch?v=abcdefg');
addContent('bio', 'Dr. Sarah', 'Cell Biology', 'https://www.youtube.com/watch?v=hijklmn');
addContent('chemistry', 'Prof. Tim', 'Periodic Table', 'https://www.youtube.com/watch?v=opqrst');
addContent('physics', 'Dr. Jane', 'Newton’s Laws', 'https://www.youtube.com/watch?v=uvwxyz');
