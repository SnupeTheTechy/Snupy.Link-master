import React from "react";
import FeatureCard from "./FeatureCard";
import "./Features.css";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import LinkIcon from "@mui/icons-material/Link";
import ShareIcon from "@mui/icons-material/Share";

function Features() {
  return (
    <div className="features-container">
      <div className="features-header">
        <span>Make It Easy To Remember</span>
        <h1>Features designed for you</h1>
        <p>
          Make every link deliver it's purpose by making it memorable and easy
          to share.
        </p>
      </div>
      <div className="feature-card">
        <FeatureCard
          logo=<DesignServicesIcon className="logoIcon" />
          title=<h1 className="feature-heading">Create</h1>
          description=<p className="feature-p">
            Create links easily, organize all the links the way you want. Make
            it right now, It's free.
          </p>
        />
        <FeatureCard
          logo=<LinkIcon className="logoIcon" />
          title=<h1 className="feature-heading">Integrate</h1>
          description=<p className="feature-p">
            Integrate your account with various poplular services, and get the
            insights from your fans.
          </p>
        />
        <FeatureCard
          logo=<ShareIcon className="logoIcon" />
          title=<h1 className="feature-heading">Share</h1>
          description=<p className="feature-p">
            Share your links anywhere, Tiktok, Instagram, Twitter with your
            friends, family, and fans.
          </p>
        />
      </div>
    </div>
  );
}

export default Features;
