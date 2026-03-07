const FooterSection = () => {
  return (
    <footer id="contact" className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6 text-center">
        
        <p className="font-display text-lg font-bold gradient-text mb-1">
          dotspaceteam@gmail.com
        </p>

        <p className="font-display text-lg font-bold gradient-text mb-3">
          +91 9860969144
        </p>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} dotspace. Building the future with AI.
        </p>

      </div>
    </footer>
  );
};

export default FooterSection;