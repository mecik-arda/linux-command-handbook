# Linux Command Handbook

[English](#english) | [Türkçe](#türkçe)

---

<a id="english"></a>
## English

This project is a comprehensive, modern "Linux Command Handbook" built entirely as a single HTML file.

### Features

- **Dual Language Support:** English and Turkish (Switched instantly without page reload).
- **Modern Design:** Custom deep purple/black dark theme and light theme options.
- **Glassmorphism UI:** Clean design language with subtle blurred backgrounds.
- **Live Search:** Instant command search via the `Ctrl+K` shortcut.
- **Robust Quick Copy:** Copy button on every code block with a reliable textarea fallback for legacy, offline, or non-HTTPS environments.
- **Smart Sidebar Navigation:** Smooth scroll up/down helper buttons in the categories list that dynamically show/hide based on scroll overflow.
- **High-Performance ScrollSpy:** IntersectionObserver-based active section tracking for smooth scrolling without heavy window scroll events.
- **Zero Dependencies:** HTML, CSS, and JS are fully self-contained in a single file. No external libraries or packages used.
- **Responsive Layout:** Fully optimized and compatible with all mobile, tablet, and desktop devices.

### Included Commands

Below is the complete list of over 200 Linux commands and cybersecurity concepts included in the project, categorized into 20 sections:

#### File System
`ls`, `cd`, `pwd`, `mkdir`, `rm`, `cp`, `mv`, `find`, `locate`, `touch`, `ln`, `chmod`, `chown`, `df`, `du`, `mount`, `umount`, `chattr`, `lsattr`, `stat`, `file`, `tree`, `basename`, `dirname`, `realpath`, `shred`

#### Text Processing
`cat`, `grep`, `sed`, `awk`, `cut`, `sort`, `uniq`, `wc`, `head`, `tail`, `tr`, `diff`, `patch`, `paste`, `join`, `nl`, `zcat`, `zgrep`

#### Process Management
`ps`, `top`, `htop`, `kill`, `killall`, `nice`, `nohup`, `bg`, `fg`, `jobs`, `systemctl`, `service`, `pstree`, `lsof`, `strace`, `pidof`, `pgrep`, `pkill`

#### Network
`ping`, `curl`, `wget`, `netstat`, `ss`, `ifconfig`, `ip`, `nmap`, `ssh`, `scp`, `rsync`, `traceroute`, `dig`, `nslookup`, `route`, `nc`, `tcpdump`, `mtr`, `whois`

#### Package Management
`apt`, `apt-get`, `dpkg`, `snap`, `yum`, `dnf`, `rpm`, `pacman`, `zypper`, `emerge`, `flatpak`, `apk`

#### User Management
`useradd`, `usermod`, `userdel`, `passwd`, `su`, `sudo`, `groups`, `id`, `who`, `w`, `last`, `chsh`, `chfn`, `lastlog`

#### Archiving
`tar`, `gzip`, `gunzip`, `zip`, `unzip`, `bzip2`, `xz`, `7z`, `cpio`, `dd`, `zstd`

#### System Info
`uname`, `uptime`, `free`, `lscpu`, `lsblk`, `lshw`, `dmidecode`, `dmesg`, `journalctl`, `vmstat`, `iostat`, `hostnamectl`, `timedatectl`, `cal`

#### Shell & Scripting
`echo`, `read`, `export`, `env`, `alias`, `history`, `source`, `cron`, `at`, `xargs`, `tee`, `watch`, `printf`, `test`, `expr`, `sleep`, `unalias`, `type`

#### Permissions & Security
`chmod`, `chown`, `umask`, `visudo`, `iptables`, `ufw`, `fail2ban`, `gpg`, `openssl`, `setfacl`, `getfacl`, `chcon`, `restorecon`, `auditctl`

#### Reconnaissance
`netdiscover`, `arp-scan`, `nikto`, `dirbuster`, `dirb`, `ffuf`, `nessus`, `Burp Suite`, `SNMP Enumeration`, `FTP Enumeration`

#### Exploitation
`msfconsole`, `php-reverse-shell`, `OpenFuck`, `AutoBlue-MS17-010`, `pwn_jenkins`, `Targeting OpenSSH`, `Targeting MySQL`, `Targeting vsFTPd`

#### Metasploit
`Scanner Modules`, `Vulnerability Scan`, `Critical Windows Exploits`, `Web and Linux Exploits`, `Pass The Hash & BadUSB`, `PsExec SMB Exploit`, `MSFVenom Payload Gen`, `Backdooring PEs`, `Token Impersonation`, `Mimikatz Hash Dumping`, `Resource Scripts`, `WinRM Exploit`, `Tomcat JSP Upload Bypass`, `vsftpd 2.3.4 Backdoor`, `PsExec Pass The Hash`, `SSH Brute-Force`

#### Privilege Escalation
`linpeas`, `pspy`, `GTFOBins`, `Windows Exploit Suggester`, `Windows Kernel Exploits`, `UACME Bypass`, `Weak Permissions`, `Sudo Privileges`, `Windows PrivEsc Paths`

#### Post Exploitation
`Shell to Meterpreter`, `Windows Persistence`, `Enable RDP (getgui)`, `Windows Keylogging`, `Clear Event Logs`, `enum_system`, `enum_protections`, `enum_configs`, `enum_users_history`, `checkvm`, `is_known_pipename`, `Shellter AV Evasion`, `PowerShell Obfuscation`, `Windows Local Enum`, `Linux Local Enum`, `Auto Enum Scripts`, `File Transfer`, `Upgrade to Interactive TTY`, `SSH Key Persistence`, `Cron Jobs Persistence`, `Registry Persistence`, `RDP Persistence`, `Pivoting`

#### Password Cracking
`hash-identifier`, `hashcat`, `john`, `hydra`, `fcrackzip`, `Linux Shadow Hash Types`, `NTLM Dumping & Cracking`

#### Active Directory Initial Access
`LLMNR / NBT-NS Poisoning`, `responder`, `ntlmrelayx.py`, `netexec (nxc) / crackmapexec`, `SMB Relay Attacks`

#### Network Attacks
`hping3`, `arpspoof`, `urlsnarf`, `dnsspoof`, `setoolkit`, `bettercap`

#### Advanced Nmap
`Host Discovery`, `Stealth/TCP Scan`, `UDP Scan`, `Version & OS Detect`, `NSE Script Scan`, `Performance & Evasion`

#### Concepts
`IP & MAC Addresses`, `TCP vs UDP`, `OSI Model`, `Subnetting`, `Pentest Lifecycle`, `Reverse & Bind Shell`, `Staged vs Non-Staged`, `Payload: reverse_tcp`, `Payload: jsp_shell_bind_tcp`, `Reverse Shell Cheatsheet`

### Installation & Usage

No Node.js or database setup is required for this project.

Simply open the `index.html` file in any modern web browser (Chrome, Firefox, Safari, etc.) to run it. It works completely offline and standalone.

### Developer
Developed by **Arda Meçik**.
- [My LinkedIn Profile](https://www.linkedin.com/in/arda-mecik/)

---

<a id="türkçe"></a>
## Türkçe

Bu proje, kapsamlı ve modern bir arayüze sahip, tamamen tek bir HTML dosyasından oluşan bir "Linux Komut El Kitabı" (Linux Command Handbook) projesidir.

### Özellikler

- **Çift Dil Desteği:** Türkçe ve İngilizce (Anlık olarak sayfayı yenilemeden değiştirilebilir).
- **Modern Tasarım:** Özel mor/siyah karanlık tema ve açık tema (Dark/Light mode seçenekleri).
- **Glassmorphism Arayüz:** Modern, arkaplanı hafif bulanık, temiz bir dizayn dili.
- **Canlı Arama (Live Search):** `Ctrl+K` kısayoluyla anında komut arama özelliği.
- **Gelişmiş Hızlı Kopyalama:** Eski, çevrimdışı veya HTTPS olmayan ortamlarda bile çalışan, textarea tabanlı fallback mekanizmasına sahip kopyalama butonu.
- **Akıllı Menü Navigasyonu:** Kategori menüsü taştığında dinamik olarak beliren, yukarı/aşağı yumuşak kaydırma butonları.
- **Performans Odaklı ScrollSpy:** Arka planda tarayıcıyı yormayan, `IntersectionObserver` tabanlı aktif bölüm izleme mekanizması.
- **Sıfır Bağımlılık (Zero Dependencies):** HTML, CSS ve JS tamamen tek bir dosya içinde. Harici kütüphane veya paket barındırmaz.
- **Duyarlı Tasarım (Responsive):** Mobil, tablet ve masaüstü cihazlar için tamamen optimize edilmiş arayüz.

### İçerilen Komutlar

Proje içerisinde yer alan 20 farklı kategori ve 200'ün üzerindeki Linux komutu / siber güvenlik kavramının tam listesi aşağıdadır:

#### Dosya Sistemi
`ls`, `cd`, `pwd`, `mkdir`, `rm`, `cp`, `mv`, `find`, `locate`, `touch`, `ln`, `chmod`, `chown`, `df`, `du`, `mount`, `umount`, `chattr`, `lsattr`, `stat`, `file`, `tree`, `basename`, `dirname`, `realpath`, `shred`

#### Metin İşleme
`cat`, `grep`, `sed`, `awk`, `cut`, `sort`, `uniq`, `wc`, `head`, `tail`, `tr`, `diff`, `patch`, `paste`, `join`, `nl`, `zcat`, `zgrep`

#### Süreç Yönetimi
`ps`, `top`, `htop`, `kill`, `killall`, `nice`, `nohup`, `bg`, `fg`, `jobs`, `systemctl`, `service`, `pstree`, `lsof`, `strace`, `pidof`, `pgrep`, `pkill`

#### Ağ
`ping`, `curl`, `wget`, `netstat`, `ss`, `ifconfig`, `ip`, `nmap`, `ssh`, `scp`, `rsync`, `traceroute`, `dig`, `nslookup`, `route`, `nc`, `tcpdump`, `mtr`, `whois`

#### Paket Yönetimi
`apt`, `apt-get`, `dpkg`, `snap`, `yum`, `dnf`, `rpm`, `pacman`, `zypper`, `emerge`, `flatpak`, `apk`

#### Kullanıcı Yönetimi
`useradd`, `usermod`, `userdel`, `passwd`, `su`, `sudo`, `groups`, `id`, `who`, `w`, `last`, `chsh`, `chfn`, `lastlog`

#### Arşivleme
`tar`, `gzip`, `gunzip`, `zip`, `unzip`, `bzip2`, `xz`, `7z`, `cpio`, `dd`, `zstd`

#### Sistem Bilgisi
`uname`, `uptime`, `free`, `lscpu`, `lsblk`, `lshw`, `dmidecode`, `dmesg`, `journalctl`, `vmstat`, `iostat`, `hostnamectl`, `timedatectl`, `cal`

#### Kabuk ve Betik
`echo`, `read`, `export`, `env`, `alias`, `history`, `source`, `cron`, `at`, `xargs`, `tee`, `watch`, `printf`, `test`, `expr`, `sleep`, `unalias`, `type`

#### İzinler ve Güvenlik
`chmod`, `chown`, `umask`, `visudo`, `iptables`, `ufw`, `fail2ban`, `gpg`, `openssl`, `setfacl`, `getfacl`, `chcon`, `restorecon`, `auditctl`

#### Keşif (Reconnaissance)
`netdiscover`, `arp-scan`, `nikto`, `dirbuster`, `dirb`, `ffuf`, `nessus`, `Burp Suite`, `SNMP Numaralandırması`, `FTP Numaralandırması`

#### İstismar (Exploitation)
`msfconsole`, `php-reverse-shell`, `OpenFuck`, `AutoBlue-MS17-010`, `pwn_jenkins`, `Hedef: OpenSSH`, `Hedef: MySQL Veritabanı`, `Hedef: vsFTPd`

#### Metasploit
`MSF ile Numaralandırma`, `Zafiyet Taraması`, `Kritik Windows İstismarları`, `Web ve Linux İstismarları`, `İleri Seviye Taktikler`, `PsExec ile SMB İstismarı`, `MSFVenom Yük Oluşturma`, `Taşınabilir Dağıtımlara Yük İliştirme`, `Erişim Token'i Taklidi`, `Mimikatz ile Hash Boşaltma`, `Resource Script ile MSF Otomasyonu`, `WinRM Açığı`, `Tomcat JSP Upload Bypass`, `vsftpd 2.3.4 Backdoor Açığı`, `PsExec ile Pass The Hash`, `SSH Brute-Force`

#### Yetki Yükseltme (Privilege Escalation)
`linpeas`, `pspy`, `GTFOBins`, `Windows Exploit Suggester`, `Windows Kernel Exploits`, `UACME ile UAC'yi Atlatma`, `Zayıf Yetkilendirmeler`, `Sudo Privileges`, `Windows Yetki Yükseltme Yolları`

#### Sömürü Sonrası (Post Exploitation)
`Shell'i Meterpreter'a Yükseltme`, `Windows'ta Kalıcılık Oluşturma`, `RDP Etkinleştirme (getgui)`, `Windows Keylogging`, `Olay Günlüklerini Temizleme`, `enum_system`, `enum_protections`, `enum_configs`, `enum_users_history`, `checkvm`, `is_known_pipename`, `Shellter ile AV Atlatma`, `PowerShell Kod Gizleme`, `Windows Yerel Numaralandırma`, `Linux Yerel Numaralandırma`, `Otomatik Yerel Numaralandırma`, `Dosyaları Hedefe Aktarma`, `Etkileşimli Olmayan Shell'i Yükseltme`, `SSH Key ile Kalıcılık`, `Cron Jobs ile Kalıcılık`, `Registry Kalıcılığı`, `RDP Yoluyla Kalıcılık`, `Pivoting (Sıçrama Saldırısı)`

#### Parola Kırma (Password Cracking)
`hash-identifier`, `hashcat`, `john`, `hydra`, `fcrackzip`, `Linux /etc/shadow Hash Türleri`, `NTLM Hash Yığınlama ve Kırma`

#### AD İlk Erişim (Active Directory Initial Access)
`LLMNR / NBT-NS Poisoning`, `responder`, `hashcat (NTLMv2 Kırma)`, `john (NTLMv2 Kırma)`, `ntlmrelayx.py`, `netexec (nxc) / crackmapexec`, `SMB Relay Saldırıları`

#### Ağ Saldırıları (Network Attacks)
`hping3`, `arpspoof`, `urlsnarf`, `dnsspoof`, `setoolkit`, `bettercap`

#### Gelişmiş Nmap (Advanced Nmap)
`nmap (Host Keşfi)`, `nmap (Stealth/TCP Tarama)`, `nmap (UDP Tarama)`, `nmap (Versiyon ve OS Tespiti)`, `nmap (NSE Script Taraması)`, `nmap (Performans ve Gizlilik)`

#### Siber Güvenlik Kavramları (Concepts)
`IP & MAC Adresleri`, `TCP vs UDP`, `OSI Modeli`, `Subnetting`, `Pentest Yaşam Döngüsü`, `Reverse & Bind Shell`, `Staged vs Non-Staged`, `Payload Türü: reverse_tcp`, `Payload Türü: jsp_shell_bind_tcp`, `Reverse Shell Cheatsheet`

### Kurulum ve Kullanım

Bu proje için herhangi bir Node.js veya veritabanı kurulumu gerekmez. 

Çalıştırmak için sadece `index.html` dosyasını herhangi bir web tarayıcısında (Chrome, Firefox, Safari vb.) açmanız yeterlidir. Tamamen çevrimdışı ve tek parça çalışır.

### Geliştirici
**Arda Meçik** tarafından geliştirilmiştir. 
- [LinkedIn Profilim](https://www.linkedin.com/in/arda-mecik/)
