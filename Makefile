cv-md:
	ts-node generateCVMD.ts
cv:
	ts-node generateCVMD.ts && \
	ts-node generateCVPDF.ts
pr-md:
	ts-node generatePRMD.ts
pr:
	ts-node generatePRMD.ts && \
	ts-node generatePRPDF.ts
