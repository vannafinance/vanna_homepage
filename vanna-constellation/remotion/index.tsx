import { registerRoot, Composition, Folder } from "remotion";
import { VannaAnimation } from "./VannaAnimation";
import { VannaAnimationAdaptive } from "./adaptive/VannaAnimationAdaptive";
import { HybridLaunchVideo } from "./videos/HybridLaunch";
import { JourneyVideo } from "./videos/JourneyVideo";
import { ConstellationVideo } from "./videos/ConstellationVideo";

const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Existing hero animations */}
      <Folder name="Hero-Animations">
        <Composition
          id="VannaAnimation"
          component={VannaAnimation}
          durationInFrames={870}
          fps={30}
          width={800}
          height={800}
        />
        <Composition
          id="VannaAnimationAdaptive"
          component={VannaAnimationAdaptive}
          durationInFrames={870}
          fps={30}
          width={800}
          height={800}
        />
      </Folder>

      {/* Launch Videos */}
      <Folder name="Launch-Videos">
        {/* Video 1: Hybrid - Best of all 6 concepts combined */}
        <Composition
          id="HybridLaunch"
          component={HybridLaunchVideo}
          durationInFrames={1500}
          fps={30}
          width={1920}
          height={1080}
        />

        {/* Video 2: $1,000 Journey - Cursor & Scroll Interactions */}
        <Composition
          id="JourneyVideo"
          component={JourneyVideo}
          durationInFrames={1382}
          fps={30}
          width={1920}
          height={1080}
        />

        {/* Video 3: Protocol Constellation + 10x Explosion */}
        <Composition
          id="ConstellationVideo"
          component={ConstellationVideo}
          durationInFrames={1370}
          fps={30}
          width={1920}
          height={1080}
        />
      </Folder>
    </>
  );
};

registerRoot(RemotionRoot);
