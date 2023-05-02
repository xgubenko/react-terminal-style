const blogPosts = [
  {
    slug: "26-04-2023",
    title: "Steps of React App deployment",
    textArray: [
      "Basic deployment steps for React App deployment on Ubuntu:",
      "1. Add  repository and install node: curl -fsSL https://deb.nodesource.com/setup_current.x | bash - &&\\ apt-get install -y nodejs",
      "In case of error: sudo apt remove libnode72",
      "2. Clone repository",
      "3. Install dependencies, create production build: npm install, npm run build",
      "4. Install nginx to serve static content: sudo apt install nginx",
      "5. Use /etc/nginx/nginx.conf to configure location",
      "6. In case if port 80 or 443 isn't available, you may have a firewall issue: firewall-cmd --zone=public --add-port=80/tcp",
    ],
  },
];

export default blogPosts;
