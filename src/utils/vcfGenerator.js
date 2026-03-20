export const generateVCF = (profile) => {
  const vcfData = `BEGIN:VCARD
VERSION:3.0
N:${profile.lastName};${profile.name};;;
FN:${profile.name} ${profile.lastName}
TITLE:${profile.title}
EMAIL;TYPE=INTERNET;TYPE=WORK:${profile.email}
TEL;TYPE=CELL:${profile.phone}
URL:${profile.linkedin}
URL:${profile.website}
NOTE:${profile.bio}
END:VCARD`;

  const blob = new Blob([vcfData], { type: 'text/vcard;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${profile.name}_${profile.lastName}_Contact.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
