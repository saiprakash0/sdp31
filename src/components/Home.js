import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // State to check if the user is logged in (This could be dynamically set based on authentication)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          <div style={styles.logoContainer}>
            <span style={styles.brandName}>scholarship management system</span>
          </div>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/login" style={styles.navLink}>Login</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/register" style={styles.navLink}>Register</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Your Educational Potential</h1>
          <p style={styles.heroDescription}>
            Discover and apply for scholarships that can transform your academic journey.
          </p>
          <div style={styles.heroButtons}>
            <Link to={isLoggedIn ? "/apply-scholarship" : "/login"} style={styles.primaryButton}>
              {isLoggedIn ? "Apply for Scholarship" : "Login to Apply"}
            </Link>
            <Link to={isLoggedIn ? "/status" : "/login"} style={styles.secondaryButton}>
              {isLoggedIn ? "Check Application Status" : "Login to Check Status"}
            </Link>
          </div>
        </div>
      </div>

      <div style={styles.scholarshipOverview}>
        <h2 style={styles.sectionTitle}>Scholarship Opportunities</h2>
        <div style={styles.scholarshipGrid}>
          <div style={styles.scholarshipCard}>
            <div style={styles.scholarshipIcon}>🎓</div>
            <h3 style={styles.scholarshipCardTitle}>Academic Excellence</h3>
            <p style={styles.scholarshipCardDescription}>
              Scholarships for top-performing students with exceptional academic records.
            </p>
            <div style={styles.scholarshipDetails}>
              <span style={styles.scholarshipBadge}>Avg. Award: 5,000</span>
              <span style={styles.scholarshipBadge}>Merit-Based</span>
            </div>
          </div>

          <div style={styles.scholarshipCard}>
            <div style={styles.scholarshipIcon}>💡</div>
            <h3 style={styles.scholarshipCardTitle}>Innovation Grants</h3>
            <p style={styles.scholarshipCardDescription}>
              Support for students pursuing innovative research and creative projects.
            </p>
            <div style={styles.scholarshipDetails}>
              <span style={styles.scholarshipBadge}>Avg. Award: 7,500</span>
              <span style={styles.scholarshipBadge}>Research-Focused</span>
            </div>
          </div>

          <div style={styles.scholarshipCard}>
            <div style={styles.scholarshipIcon}>🌍</div>
            <h3 style={styles.scholarshipCardTitle}>Community Impact</h3>
            <p style={styles.scholarshipCardDescription}>
              Scholarships for students demonstrating significant community service.
            </p>
            <div style={styles.scholarshipDetails}>
              <span style={styles.scholarshipBadge}>Avg. Award: 4,000</span>
              <span style={styles.scholarshipBadge}>Service-Based</span>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.applicationProcess}>
        <h2 style={styles.sectionTitle}>Application Process</h2>
        <div style={styles.processSteps}>
          <div style={styles.processStep}>
            <div style={styles.stepNumber}>1</div>
            <h3 style={styles.stepTitle}>Create Profile</h3>
            <p style={styles.stepDescription}>
              Set up your personalized student profile with academic and personal details.
            </p>
          </div>
          <div style={styles.processStep}>
            <div style={styles.stepNumber}>2</div>
            <h3 style={styles.stepTitle}>Browse Scholarships</h3>
            <p style={styles.stepDescription}>
              Explore scholarships tailored to your academic background and interests.
            </p>
          </div>
          <div style={styles.processStep}>
            <div style={styles.stepNumber}>3</div>
            <h3 style={styles.stepTitle}>Submit Application</h3>
            <p style={styles.stepDescription}>
              Complete and submit scholarship applications with required documents.
            </p>
          </div>
          <div style={styles.processStep}>
            <div style={styles.stepNumber}>4</div>
            <h3 style={styles.stepTitle}>Track Progress</h3>
            <p style={styles.stepDescription}>
              Monitor your application status and receive notifications.
            </p>
          </div>
        </div>
      </div>

      <div style={styles.statsSection}>
        <h2 style={styles.sectionTitle}>Our Impact</h2>
        <div style={styles.statsContainer}>
          <div style={styles.statCard}>
            <h3 style={styles.statNumber}>50M+</h3>
            <p style={styles.statDescription}>Total Scholarships Awarded</p>
          </div>
          <div style={styles.statCard}>
            <h3 style={styles.statNumber}>10,000+</h3>
            <p style={styles.statDescription}>Students Supported</p>
          </div>
          <div style={styles.statCard}>
            <h3 style={styles.statNumber}>500+</h3>
            <p style={styles.statDescription}>Scholarship Programs</p>
          </div>
        </div>
      </div>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerColumn}>
            <h4 style={styles.footerTitle}>Quick Links</h4>
            <ul style={styles.footerList}>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
          <div style={styles.footerColumn}>
            <h4 style={styles.footerTitle}>Support</h4>
            <ul style={styles.footerList}>
              <li>Help Center</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div style={styles.footerColumn}>
            <h4 style={styles.footerTitle}>Connect</h4>
            <ul style={styles.footerList}>
              <li>Email: support@gmail.com</li>
              <li>Phone: +91 7671893333</li>
            </ul>
          </div>
        </div>
        <div style={styles.copyrightSection}>
          <p>© 2024 ScholarConnect. Empowering Education, Transforming Lives.</p>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: "#f5f5f5",
    color: "#333",
    lineHeight: "1.6",
  },
  navbar: {
    backgroundColor: "#1abc9c",
    padding: "15px 0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  navContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "50px",
    height: "50px",
    marginRight: "10px",
  },
  brandName: {
    color: "white",
    fontSize: "22px",
    fontWeight: "bold",
  },
  navList: {
    display: "flex",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 15px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s ease",
  },
  heroSection: {
    backgroundColor: "#3498db",
    color: "white",
    padding: "80px 0",
    textAlign: "center",
  },
  heroContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  heroTitle: {
    fontSize: "42px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  heroDescription: {
    fontSize: "20px",
    marginBottom: "30px",
  },
  heroButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  primaryButton: {
    display: "inline-block",
    backgroundColor: "#2ecc71",
    color: "white",
    padding: "12px 25px",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  secondaryButton: {
    display: "inline-block",
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid white",
    padding: "12px 25px",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  scholarshipOverview: {
    backgroundColor: "white",
    padding: "60px 20px",
    textAlign: "center",
  },
  scholarshipGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "40px",
  },
  scholarshipCard: {
    backgroundColor: "#ecf0f1",
    padding: "30px",
    borderRadius: "8px",
    width: "280px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  scholarshipIcon: {
    fontSize: "40px",
    marginBottom: "20px",
  },
  scholarshipCardTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  scholarshipCardDescription: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  scholarshipDetails: {
    display: "flex",
    justifyContent: "space-between",
  },
  scholarshipBadge: {
    backgroundColor: "#3498db",
    color: "white",
    padding: "5px 12px",
    borderRadius: "15px",
    fontSize: "14px",
  },
  applicationProcess: {
    backgroundColor: "#f5f5f5",
    padding: "60px 20px",
  },
  processSteps: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
  },
  processStep: {
    textAlign: "center",
    width: "220px",
  },
  stepNumber: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#3498db",
  },
  stepTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  stepDescription: {
    fontSize: "16px",
    color: "#7f8c8d",
  },
  statsSection: {
    backgroundColor: "#ecf0f1",
    padding: "60px 20px",
    textAlign: "center",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "60px",
  },
  statCard: {
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "8px",
    width: "220px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  statNumber: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#3498db",
    marginBottom: "10px",
  },
  statDescription: {
    fontSize: "18px",
    color: "#7f8c8d",
  },
  footer: {
    backgroundColor: "#34495e",
    color: "white",
    padding: "40px 20px",
    textAlign: "center",
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  footerColumn: {
    width: "30%",
  },
  footerTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  footerList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  copyrightSection: {
    marginTop: "20px",
    fontSize: "14px",
  },
};

export default Home;
