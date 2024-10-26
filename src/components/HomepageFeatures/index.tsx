import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  visual: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Who Am I?',
    visual: '⚙️',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        I am a fullstack software engineer at Binance, building a high-volume, high-performance, low-latency peer-to-peer cryptocurrency exchange.
      </>
    ),
  },
  {
    title: 'Background',
    visual: '🎓',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        I attended the National University of Singapore and graduated with a Bachelor of Computing (Honours) in Computer Science, earning a Distinction.
      </>
    ),
  },
  {
    title: 'Where Am I?',
    visual: '🌏',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Currently based in Kuala Lumpur, Malaysia 🇲🇾 
        Looking for tech opportunities in Singapore 🇸🇬
        Reach me via my social links below 👇 
      </>
    ),
  },
];

function Feature({title, visual, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <h1>{visual}</h1>
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
