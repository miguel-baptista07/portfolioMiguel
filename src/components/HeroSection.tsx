import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const TERMINAL_LINES = [
  "$ nmap -sV -p 1-65535 192.168.1.1",
  "Starting Nmap 7.94 ( https://nmap.org )",
  "[+] Open port 22/tcp   ssh   OpenSSH 8.2",
  "[+] Open port 80/tcp   http  Apache 2.4.41",
  "[+] Open port 443/tcp  ssl   nginx 1.18.0",
  "[+] Open port 8080/tcp http  Apache Tomcat 9.0.58",
  "Nmap done: 1 IP address (1 host up) scanned in 23.45s",
  "$ hydra -l admin -P /usr/share/wordlists/rockyou.txt ssh://192.168.1.105",
  "Hydra v9.4 (c) 2022 by van Hauser/THC & David Maciejak",
  "[DATA] attacking ssh://192.168.1.105:22/",
  "[DATA] max 16 tasks per 1 server, 16 threads",
  "[22][ssh] host: 192.168.1.105   login: admin   password: password123",
  "1 of 1 target successfully completed, 1 valid password found",
  "$ john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt",
  "Using default input encoding: UTF-8",
  "Loaded 3 password hashes with no different salts (md5crypt)",
  "[+] letmein          (user1)",
  "[+] shadow123        (user2)",
  "[+] qwerty1234       (user3)",
  "Session completed.",
  "$ gobuster dir -u http://192.168.1.1 -w /usr/share/wordlists/dirb/common.txt",
  "===============================================================",
  "Gobuster v3.6  by OJ Reeves (@TheColonial)",
  "===============================================================",
  "/admin                (Status: 200) [Size: 4532]",
  "/login                (Status: 200) [Size: 2891]",
  "/uploads              (Status: 301) [Size: 178]",
  "/config               (Status: 200) [Size: 1024]",
  "[*] /backup.zip       (Status: 403) [Size: 277]",
  "$ sqlmap -u \"http://target.com/page?id=1\" --dbs --batch",
  "[*] testing connection to the target URL",
  "[*] checking if the target is protected by WAF/IPS",
  "[*] the back-end DBMS is MySQL",
  "[+] available databases [3]: information_schema, users_db, production",
  "$ msfconsole -q",
  "msf6 > use exploit/multi/handler",
  "msf6 exploit(multi/handler) > set PAYLOAD linux/x86/meterpreter/reverse_tcp",
  "PAYLOAD => linux/x86/meterpreter/reverse_tcp",
  "msf6 exploit(multi/handler) > set LHOST 10.10.14.5",
  "LHOST => 10.10.14.5",
  "msf6 exploit(multi/handler) > exploit",
  "[*] Started reverse TCP handler on 10.10.14.5:4444",
  "[+] Meterpreter session 1 opened (10.10.14.5:4444 -> 192.168.1.105:52341)",
  "meterpreter > getuid",
  "Server username: root",
  "meterpreter > sysinfo",
  "Computer  : target-server",
  "OS        : Linux 5.4.0-74-generic",
  "$ nc -lvnp 4444",
  "Listening on 0.0.0.0 4444",
  "[+] Connection received on 192.168.1.105 52893",
  "id",
  "uid=0(root) gid=0(root) groups=0(root)",
  "whoami",
  "root",
  "$ hashcat -m 0 hashes.txt /usr/share/wordlists/rockyou.txt",
  "hashcat (v6.2.6) starting...",
  "Dictionary cache built:",
  "* Filename..: /usr/share/wordlists/rockyou.txt",
  "* Keyspace..: 14344385",
  "5f4dcc3b5aa765d61d8327deb882cf99:password",
  "098f6bcd4621d373cade4e832627b4f6:test",
  "d8578edf8458ce06fbc5bb76a58c5ca4:qwerty",
  "$ enum4linux -a 192.168.1.1",
  "Starting enum4linux v0.9.1",
  "[+] Workgroup/Domain: WORKGROUP",
  "[+] Got OS info: Windows 10 Pro (Build 19041)",
  "[*] Users: administrator, guest, user1, svc_backup",
  "[+] Share Enumeration on 192.168.1.1",
  "ADMIN$    Disk  Remote Admin",
  "C$        Disk  Default share",
  "IPC$      IPC   Remote IPC",
  "$ nikto -h http://192.168.1.1",
  "- Nikto v2.1.6",
  "[*] Server: Apache/2.4.41 (Ubuntu)",
  "[+] /phpmyadmin/: phpMyAdmin login page found",
  "[+] /backup/: Backup directory found, listing enabled",
  "[+] X-Frame-Options header not present",
  "$ crackmapexec smb 192.168.1.0/24 -u admin -p password123",
  "[+] 192.168.1.105  SMB  (name:TARGET)  (domain:WORKGROUP)  (signing:False)",
  "[+] 192.168.1.105  SMB  admin:password123  (Pwn3d!)",
  "$ wpscan --url http://192.168.1.1 --enumerate u,p",
  "[*] WordPress version 5.9.3 identified",
  "[+] User(s) identified: admin, editor, subscriber",
  "[*] 3 vulnerabilities identified",
  "[!] Title: WP < 6.0.3 - Reflected XSS via wp-newbloguser",
  "$ ssh admin@192.168.1.105",
  "admin@192.168.1.105's password:",
  "[+] Connected to 192.168.1.105",
  "admin@target:~$ sudo -l",
  "User admin may run the following commands:",
  "    (ALL : ALL) ALL",
  "admin@target:~$ sudo su",
  "root@target:/home/admin#",
  "$ python3 exploit.py --target 192.168.1.108 --port 8080",
  "[*] Connecting to target...",
  "[*] Sending payload...",
  "[+] Shell spawned! PID: 3742",
];

const VISIBLE = 25;

function formatTs(d: Date): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}

const TYPING_STRINGS = [
  "Computer Engineering Student",
  "Cybersecurity Enthusiast",
  "CTF Player",
  "Red Team Learner",
  "Future Penetration Tester",
  "Python Developer",
];

const TERM_BG = "#0a0a0a";

const HeroSection = () => {
  const [termLines, setTermLines] = useState<Array<{ text: string; ts: string }>>(() => {
    const now = formatTs(new Date());
    return TERMINAL_LINES.slice(0, VISIBLE).map(text => ({ text, ts: now }));
  });
  const nextIdxRef = useRef(VISIBLE);
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = TERMINAL_LINES[nextIdxRef.current % TERMINAL_LINES.length];
      nextIdxRef.current++;
      setTermLines(prev => [...prev.slice(1), { text: next, ts: formatTs(new Date()) }]);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      hasScrolledRef.current = true;
      setIsVisible(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_STRINGS[stringIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => setCharIndex(c => c + 1), 65);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex(c => c - 1), 32);
      } else {
        setDeleting(false);
        setStringIndex(i => (i + 1) % TYPING_STRINGS.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, stringIndex]);

  const displayedText = TYPING_STRINGS[stringIndex].slice(0, charIndex);

  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center overflow-hidden" style={{ background: '#0a0a0a' }}>
      {/* Terminal step background */}
      <div
        className="absolute inset-x-0 overflow-hidden pointer-events-none select-none flex flex-col justify-end"
        style={{ top: '15vh', height: '70vh' }}
      >
        <div className="flex flex-col gap-0 pb-2 pl-[10%]">
          {termLines.map((line, i) => (
            <div
              key={i}
              className="font-mono whitespace-nowrap"
              style={{ color: 'rgba(74, 222, 128, 0.4)', fontSize: '13px', lineHeight: '1.6' }}
            >
              <span style={{ opacity: 0.6 }}>{line.ts} </span>{line.text}
            </div>
          ))}
        </div>

        {/* Top fade */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{ height: '20%', background: `linear-gradient(to bottom, ${TERM_BG}, transparent)` }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ height: '20%', background: `linear-gradient(to top, ${TERM_BG}, transparent)` }}
        />
        {/* Left fade */}
        <div
          className="absolute top-0 bottom-0 left-0 pointer-events-none"
          style={{ width: '15%', background: `linear-gradient(to right, ${TERM_BG}, transparent)` }}
        />
        {/* Right fade */}
        <div
          className="absolute top-0 bottom-0 right-0 pointer-events-none"
          style={{ width: '15%', background: `linear-gradient(to left, ${TERM_BG}, transparent)` }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 section-padding content-width">
        <motion.p
          className="font-mono text-xs uppercase tracking-[0.35em] text-primary mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          COMPUTER ENGINEERING STUDENT
        </motion.p>

        <motion.h1
          className="font-serif text-4xl md:text-7xl lg:text-8xl leading-none mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Miguel Baptista
        </motion.h1>

        <motion.div
          className="mb-10 h-8 flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="font-mono text-lg md:text-xl text-primary">
            {displayedText}
            <span className="animate-pulse ml-0.5">|</span>
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 bg-primary text-background font-mono text-xs uppercase tracking-widest hover:bg-primary/80 transition-colors duration-200 text-center"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-primary/50 text-primary font-mono text-xs uppercase tracking-widest hover:bg-primary/10 transition-colors duration-200 text-center"
          >
            Download CV
          </a>
        </motion.div>

        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <a
            href="https://github.com/miguel-baptista07"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 border border-white/10 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/10 hover:scale-[1.15] hover:shadow-[0_0_15px_rgba(29,200,160,0.4)] transition-all duration-300 ease-in-out"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/miguel-baptista-170744355/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 border border-white/10 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/10 hover:scale-[1.15] hover:shadow-[0_0_15px_rgba(29,200,160,0.4)] transition-all duration-300 ease-in-out"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:miguelkevlin23@gmail.com"
            className="p-2.5 border border-white/10 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/10 hover:scale-[1.15] hover:shadow-[0_0_15px_rgba(29,200,160,0.4)] transition-all duration-300 ease-in-out"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-bob flex items-center justify-center w-10 h-10 rounded-full border-2 text-[#1dc8a0] hover:bg-[#1dc8a0]/10 transition-colors duration-200 focus:outline-none${!isVisible ? " pointer-events-none" : ""}`}
        style={{ borderColor: "#1dc8a0" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={hasScrolledRef.current ? { duration: 0.3 } : { duration: 0.6, delay: 1.2 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to about section"
      >
        <ChevronDown size={20} strokeWidth={2.5} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
