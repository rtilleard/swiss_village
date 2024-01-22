window.onload = function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const background = document.getElementById('background');

  function resizeCanvas() {
      canvas.width = background.clientWidth;
      canvas.height = background.clientHeight;
  }

  // Adjust canvas size whenever the window is resized
  window.addEventListener('resize', resizeCanvas);

  // Initial resize
  resizeCanvas();

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let snowflakes = createSnowflakes();

    function createSnowflakes() {
        let flakes = [];
        for (let i = 0; i < 500; i++) {
            flakes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speed: Math.random() * 1 + 0.5
            });
        }
        return flakes;
    }

    function updateSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snowflakes.forEach(flake => {
            flake.y += flake.speed;
            if (flake.y > canvas.height) {
                flake.y = 0;
                flake.x = Math.random() * canvas.width;
            }
            ctx.beginPath();
            ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.fill();
        });
    }

    function animate() {
        updateSnowflakes();
        requestAnimationFrame(animate);
    }

    animate();
};
