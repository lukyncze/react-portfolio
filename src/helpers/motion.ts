interface MotionGeneralProps {
  initial: string;
  whileInView: string;
}

interface MotionProps extends MotionGeneralProps {
  viewport: {once: boolean; amount: number};
}

const motionGeneralProps: MotionGeneralProps = {
  initial: 'hidden',
  whileInView: 'show',
};

export const motionLowerViewortProps: MotionProps = {
  ...motionGeneralProps,
  viewport: {once: false, amount: 0.3},
};

export const motionHigherViewortProps: MotionProps = {
  ...motionGeneralProps,
  viewport: {once: false, amount: 0.7},
};

