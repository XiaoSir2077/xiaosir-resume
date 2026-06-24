import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  onLetterAnimationComplete?: () => void;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text = '',
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete
}) => {
  const containerRef = useRef<HTMLDivElement | HTMLParagraphElement | HTMLHeadingElement | null>(null);
  const animationCompletedRef = useRef(false);
  const onCompleteRef = useRef(onLetterAnimationComplete);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Keep callback ref updated
  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  // Handle font loading
  useEffect(() => {
    if (document.fonts && document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else if (document.fonts) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    } else {
      setFontsLoaded(true);
    }
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current || !text || !fontsLoaded) return;
      if (animationCompletedRef.current) return;

      const el = containerRef.current;
      
      // Calculate ScrollTrigger start position
      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
      const sign =
        marginValue === 0
          ? ''
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      // Select targets to animate based on splitType
      let targets: HTMLElement[] = [];
      if (splitType.includes('chars')) {
        targets = Array.from(el.querySelectorAll('.split-char'));
      } else if (splitType.includes('words')) {
        targets = Array.from(el.querySelectorAll('.split-word'));
      } else {
        targets = Array.from(el.querySelectorAll('.split-char, .split-word'));
      }

      if (targets.length === 0) return;

      // Set initial styles before animating
      gsap.set(targets, { ...from });

      // Create scroll-triggered tween animation
      const tween = gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
            fastScrollEnd: true,
            anticipatePin: 0.4,
          },
          onComplete: () => {
            animationCompletedRef.current = true;
            onCompleteRef.current?.();
          },
          willChange: 'transform, opacity',
          force3D: true,
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === el) st.kill();
        });
        tween.kill();
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
      ],
      scope: containerRef,
    }
  );

  // Extract gradient classes to apply them to inner characters/words instead of the parent
  const classList = className.split(/\s+/).filter(Boolean);
  const gradientClasses = classList.filter(c =>
    c.startsWith('bg-gradient-') ||
    c.startsWith('from-') ||
    c.startsWith('via-') ||
    c.startsWith('to-') ||
    c === 'text-transparent' ||
    c.startsWith('bg-clip-')
  );
  const hasGradient = gradientClasses.length > 0;
  const parentClasses = classList.filter(c => !gradientClasses.includes(c)).join(' ');
  const childGradientClass = gradientClasses.join(' ');

  const renderWordsAndChars = () => {
    // Split text into words
    const words = text.split(' ');
    
    return words.map((word, wordIdx) => {
      // Split word into characters
      const chars = Array.from(word);
      const isLastWord = wordIdx === words.length - 1;

      return (
        <span
          key={`word-${wordIdx}`}
          className={`split-word inline-block whitespace-nowrap ${hasGradient && !splitType.includes('chars') ? childGradientClass : ''}`}
          style={{ display: 'inline-block' }}
        >
          {splitType.includes('chars') ? (
            chars.map((char, charIdx) => (
              <span
                key={`char-${charIdx}`}
                className={`split-char inline-block ${hasGradient ? childGradientClass : ''}`}
                style={{ display: 'inline-block' }}
              >
                {char}
              </span>
            ))
          ) : (
            word
          )}
          {/* Add trailing space if not the last word */}
          {!isLastWord && <span className="inline-block">&nbsp;</span>}
        </span>
      );
    });
  };

  const Tag = tag as any;

  const style: React.CSSProperties = {
    textAlign,
    overflow: 'hidden',
    display: 'inline-block',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    willChange: 'transform, opacity',
  };

  return (
    <Tag ref={containerRef} style={style} className={`split-parent ${parentClasses}`}>
      {renderWordsAndChars()}
    </Tag>
  );
};

export default SplitText;
