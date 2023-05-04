const blogPosts = [
  {
    slug: "04-05-2023",
    title: "Install Let's Encrypt on Linux Ubuntu",
    textArray: [
      "Steps to obtain free trusted certificate with automated update:",
      "1. Update Package manager: sudo apt update && sudo apt upgrade -y",
      "2. Install Certbot: sudo apt install certbot python3-certbot-nginx",
      "3. Check Nginx config and restart the server: sudo nginx -t; sudo systemctl reload nginx",
      "4. Install SSL certificate: sudo certbot --nginx -d example.com -d www.example.com",
      "5. Check Certbot timer: sudo systemctl status certbot.timer",
    ],
  },
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
