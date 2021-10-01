import fs from 'fs';

export default function handler(req, res) {
	if (req.method === 'POST') {
		const { email } = req.body;
		if (!email || !email.includes('@')) {
			return res.status(400).json({ message: 'Please Enter a valid email' });
		}

		const emailList = JSON.parse(fs.readFileSync(`${process.cwd()}/emailList.json`, 'utf-8'));
		const newEmailList = [...emailList, email];

		fs.writeFileSync(`${process.cwd()}/emailList.json`, JSON.stringify(newEmailList));

		return res.status(200).json({ message: 'Your email added to our newsletter list' });
	}
}
